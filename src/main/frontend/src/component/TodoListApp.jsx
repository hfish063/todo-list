import React, {Component} from "react";
import ListTasksComponent from "./ListTasksComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskComponent from "./TaskComponent";

class TodoListApp extends Component {
    render() {
        return ( 
            // temp comment for debugging purposes:
            // <>
            //     <h1>To-do List Application</h1>
            //     <hr></hr>
            //     <ListTasksComponent/>
            //     <hr></hr>
            // </>

            <>
            <h1>To-Do List</h1>
            <hr></hr>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ListTasksComponent />} />
                    <Route path="/home" element={<ListTasksComponent />} />
                    <Route path="/task" element={<TaskComponent />} />
                </Routes>
            </BrowserRouter>

            <hr></hr>
            </>
        )
    }
}

export default TodoListApp