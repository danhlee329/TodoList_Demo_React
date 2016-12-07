import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListModule from './TodoListModule/TodoListModule';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = props => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React TodoList Demo</h2>
    </div>
    <div className="App-Content">
      <TodoListModule listName="Kitchen"></TodoListModule>
      <TodoListModule listName="Bathroom (Mezzanine)"></TodoListModule>
    </div>
  </div>
);

export default App;
