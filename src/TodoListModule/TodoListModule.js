import React from 'react';
//import React, { Component } from 'react';
import './TodoListModule.css';

const TodoListModule = props => {
  const todoItemsRendered = renderTodoItems(props.todoItemList);

  return (
      <div>
        <input placeholder="What needs to be done?" />
        <button>Add Task</button>
        <ul>
          { todoItemsRendered }
        </ul>

        <footer>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
          <button>Clear Completed</button>
        </footer>
      </div>
  )
};

const renderTodoItems = todoItemList => (
  //todoItemList.map(todoItem => this.renderTodoItem(todoItem))
  <li>test</li>
);

const renderTodoItem = props => {
    <li>
      <input type="checkbox" /> {props.name}
    </li>
}

renderTodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool.isRequired
};

export default TodoListModule;
