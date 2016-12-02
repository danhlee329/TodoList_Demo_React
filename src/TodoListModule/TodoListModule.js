import React from 'react';
import './TodoListModule.css';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './_constants' 

//Todo Item Class
class TodoItem {
  id: number;
  name: string;
  isComplete: bool;

  constructor(itemID: number, itemName: string){
    this.id = itemID;
    this.name = itemName;
  }
}

//Add Item Field
class ItemEnterField extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      newTaskName: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleAddNewTask = this.handleAddNewTask.bind(this);
  }

  handleUserInput(event){
    this.setState({
      newTaskName: event.target.value
    })
  }
  handleAddNewTask(){
    this.props.onItemAdd(this.state.newTaskName);
    this.setState({
      newTaskName: ""
    })    
  }

  render() {
    return (
        <div>
          <input type="text" 
                 placeholder="What needs to be done?"
                 value={this.state.newTaskName}
                 onChange={this.handleUserInput} />
          <button onClick={this.handleAddNewTask}>Add Task</button>
        </div>
    );
  }
}

//Todo List Module
class TodoListModule extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      recordID: 0,
      itemList: [],
      viewTaskByStatus: null
    }

    this.addNewTask = this.addNewTask.bind(this);
    this.changeViewMode = this.changeViewMode.bind(this);
    this.setCompletedStatus = this.setCompletedStatus.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }
  //Adds new task to current list
  addNewTask(newItemName){
    let curID = this.state.recordID;
    let curList = this.state.itemList;

    curID++;

    curList.push(new TodoItem(curID, newItemName));

    this.setState({
      recordID: curID,
      itemList: curList
    });    
  }
  //Changes view of list (all, active, completed)
  changeViewMode(viewType){
    this.setState({
      viewTaskByStatus: viewType
    });
  }
  //Sets completed Status for an item
  setCompletedStatus(id, isCompleted){
    let editedList = this.state.itemList;

    editedList.forEach((item) => {
      if(item.id === id){
        item.isComplete = isCompleted
        return;
      }
    });

    this.setState({
      itemList: editedList
    });
  }
  //clears all completed items from current list
  clearCompleted() {
    let newList = [];

    this.state.itemList.forEach((item) =>{
      if(!item.isComplete){
        newList.push(item);
      }
    })

    this.setState({
      itemList: newList
    });
  }

  //Final Rendered version
  render() {
    let completedCount = 0;
    let displayItems = [];
    const curList = this.state.itemList;

    curList.forEach((item) =>{
      if(item.isComplete){
        completedCount++;
      }

      switch(this.state.viewTaskByStatus){
        case ACTIVE_TODOS:
          if(!item.isComplete) {
            displayItems.push(item);
          }
          break;
        case COMPLETED_TODOS:
          if(item.isComplete) {
            displayItems.push(item);
          }        
          break;
        default:
          displayItems.push(item);
          break;                    
      }
    });

    return (
        <div>
          <ItemEnterField onItemAdd={this.addNewTask} />
          <RenderTodoItems itemList={displayItems}
                           onCompleteStatusChange={this.setCompletedStatus} />
          <RenderFooter displayedCount={displayItems.length}
                        totalCount={curList.length}
                        completedCount={completedCount}
                        onViewModeChange={this.changeViewMode}
                        onClearCompleted={this.clearCompleted} />
        </div>
    );
  }
};

//Rendered list of todo items
class RenderTodoItems extends React.Component {
  constructor(props){
    super(props);

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange(id, isCompleted){
    this.props.onCompleteStatusChange(id, isCompleted);
  }

  render(){
    const itemList = this.props.itemList.map((item) => 
      <RenderTodoItem key={item.id}
                      itemID={item.id}
                      name={item.name}
                      isComplete={item.isComplete}
                      onCompleteStatusChange={this.handleStatusChange} />
    );

    return <ul>
             {itemList}
           </ul>
  }
}

//Rendered todo item (single)
//TODO: look into warning:
    /*
warning.js:36 Warning: RenderTodoItem is changing an uncontrolled 
input of type checkbox to be controlled. Input elements should not 
switch from uncontrolled to controlled (or vice versa). Decide between 
using a controlled or uncontrolled input element for the lifetime of the 
component. More info: 
    */
class RenderTodoItem extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isComplete: this.props.isComplete
    }
  }

  handleClick(event){
    this.props.onCompleteStatusChange(this.props.itemID,
                                      !this.state.isComplete);

    this.setState({
      isComplete: !this.props.isComplete
    });
  }

  render() {
    return <li>
              <input type="checkbox" 
                     checked={this.props.isComplete}
                     onChange={this.handleClick} /> 
              {this.props.name}
            </li>
  }
}

//Rendered footer
class RenderFooter extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClearingCompleted = this.handleClearingCompleted.bind(this);
  }

  handleClick(e){
    this.props.onViewModeChange(e.target.value);
  }
  handleClearingCompleted() {
    this.props.onClearCompleted();
  }

  render() {
    if(this.props.totalCount === 0) {
      return null;
    }
    return  <footer>
              {Description(this.props.completedCount, this.props.totalCount)} 

              <button onClick={this.handleClick} value={ALL_TODOS}>All</button>
              <button onClick={this.handleClick} value={ACTIVE_TODOS}>Active</button>
              <button onClick={this.handleClick} value={COMPLETED_TODOS}>Completed</button>
              {this.props.completedCount > 0 &&
                <button onClick={this.handleClearingCompleted}>Clear Completed</button>
              }
            </footer>
  }
}

function Description(completedCount, totalCount){
  let remaining = totalCount - completedCount;

  return <p>
          {remaining} item{remaining !== 1 && "s"} of {totalCount}  left
        </p>;
}

export default TodoListModule;