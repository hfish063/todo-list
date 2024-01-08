import React, {Component} from "react";
import ListTasksComponent from "./ListTasksComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskComponent from "./TaskComponent";

class TodoListApp extends Component {
    render() {
        return ( 
            <>
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