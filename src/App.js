import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Test.css';
import './css/Test.css';
import TodoListModule from './TodoListModule/TodoListModule';
import { AlertModule_Info, AlertModule_Warning, AlertModule_Error } from './Shared/Alert/AlertModule';

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

      <AlertModule_Info subject="Test Info" msg="Test Message" />
      <AlertModule_Warning subject="Test Info" msg="Test Message" />
      <AlertModule_Error subject="Test Info" msg="Test Message" />

      <div className="TodoModule_Content">
        <TodoListModule listName="Kitchen"></TodoListModule>
        <TodoListModule listName="Bathroom (Mezzanine)"></TodoListModule>
        <TodoListModule listName="Living Room"></TodoListModule>
        <TodoListModule listName="Bathroom (Upstairs)"></TodoListModule>        
        <TodoListModule listName="Loft"></TodoListModule>        
        <TodoListModule listName="Misc"></TodoListModule>        
      </div>
    </div>
  </div>
);

export default App;
