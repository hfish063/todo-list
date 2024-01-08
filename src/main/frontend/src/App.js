import React, {Component} from "react";
import "./App.css";
import TodoListApp from "./component/TodoListApp";

class App extends Component {
  render() {
    return (
      <div className = "container">
        <TodoListApp />
      </div>
    )
  }
}

export default App;