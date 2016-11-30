import React, { Component } from 'react';
import './TodoListModule.css';

function NewTODOItem(_id, _name){
  return {
    id: _id,
    name: _name
  }
}

class TodoListModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordIDCount: 0,
      nameEntry : "",
      todoItemList: [] //TODO: take out of state later!
    }

    this.handleChange = this.handleChange.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  //Events
  handleChange(event) {
    this.setState({nameEntry: event.target.value});
  }  
  addNewTask(event) {
    let curID = this.state.recordIDCount;
    let curEntry = this.state.nameEntry;
    let todoItemList_current = this.state.todoItemList;

    curID++;
    todoItemList_current.push(NewTODOItem(curID, curEntry));
    
    console.log("new task added (sort of)! - " + this.state.nameEntry);
    
    this.setState({
                    recordIDCount: curID,
                    nameEntry: "",
                    todoItemList: todoItemList_current
    })
  }

  //Final Rendered version
  render() {
    return (
        <div>
          <input type="text" placeholder="What needs to be done?" value={this.state.nameEntry} onChange={this.handleChange} />
          <button onClick={this.addNewTask}>Add Task</button>
          <RenderTodoItems todoItemList={this.state.todoItemList} />
          <RenderFooter recordCount={this.state.todoItemList.length} />
        </div>
    );
  }
};

//Rendered list of todo items
//todoItemList.map(todoItem => this.renderTodoItem(todoItem))
//{props.todoItemList.map(todoItem => this.RenderTodoItem(todoItem))}
function RenderTodoItems(props) {
  return <ul>
          {props.todoItemList.map(todoItem => RenderTodoItem(todoItem))}
        </ul>;
}

//Rendered todo item (single)
function RenderTodoItem(props) {
    //TODO: add keys!
    return <li key={props.id}>
            <input type="checkbox" /> {props.name}
          </li>
}
// //Typing the prop items
// RenderTodoItem.propTypes = {
//   //id: React.PropTypes.number.isRequired,
//   name: React.PropTypes.string.isRequired//,
//   //isComplete: React.PropTypes.bool.isRequired
// };

//Rendered footer
function RenderFooter(recordCount) {
  if(recordCount && recordCount > 0) {
    return <footer>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            <button>Clear Completed</button>
          </footer>
  }
  return null;
}
export default TodoListModule;