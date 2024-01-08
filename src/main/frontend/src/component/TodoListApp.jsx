import React, {Component} from "react";
import ListTasksComponent from "./ListTasksComponent";

class TodoListApp extends Component {
    render() {
        return ( <>
            <h1>Todo-List Application</h1>
            <hr></hr>
            <ListTasksComponent/>
            <hr></hr>
            </>
        )
    }
}

export default TodoListApp