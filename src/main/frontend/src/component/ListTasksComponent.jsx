import React, {Component} from "react";
import TaskDataService from "../service/TaskDataService";
import axios from "axios";
import { Form } from "formik";
import { Link } from "react-router-dom";
import TaskComponent from "./TaskComponent";

const TITLE = "TodoList App";

class ListTasksComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.refreshTasks = this.refreshTasks.bind(this)
        this.deleteTaskClicked = this.deleteTaskClicked.bind(this)
        this.showCompletedTasksClicked = this.showCompletedTasksClicked.bind(this)
    }

    componentDidMount() {
        document.title = TITLE;
        this.refreshTasks();
    }

    refreshTasks() {
       TaskDataService.retrieveAllTasks()
            .then(
                response => {
                    console.log(response);
                    this.setState({tasks: response.data})
                }
            )
    }

    showCompletedTasksClicked() {
        TaskDataService.retrieveAllCompleteTasks()
            .then(
                response => {
                    console.log(response);
                    this.setState({tasks: response.data})
                }
            )
    }

    deleteTaskClicked(id) {
        TaskDataService.deleteTask(id)
            .then(
                response => {
                    this.refreshTasks()
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h1>To-Do List</h1>
                <hr></hr>
                <div className="container">
                    <div className="buttons-flex">
                        <TaskComponent />
                        <button className="btn btn-primary" onClick={this.showCompletedTasksClicked}>Show Completed</button>
                    </div>
                    <br></br>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Completion Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task =>
                                        <tr key={task.id}>
                                            <td>{task.id}</td>
                                            <td>{task.name}</td>
                                            <td>{String(task.complete).toUpperCase()}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTaskClicked(task.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTasksComponent