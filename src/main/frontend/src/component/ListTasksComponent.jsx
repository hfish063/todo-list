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
        this.deleteCompleteTasksClicked = this.deleteCompleteTasksClicked.bind(this)
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
                    response.data.sort((a, b) => a.id - b.id)
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

    // TODO: method implementation
    checkBoxClicked(id, name, isComplete) {
        let task = JSON.stringify ({
            id: id,
            userId: "UUID",
            name: name,
            complete: !isComplete
        });

        TaskDataService.updateTask(task)
            .then(
                response => {
                    this.refreshTasks()
                }
            )
        console.log(task);
    }

    deleteTaskClicked(id) {
        TaskDataService.deleteTask(id)
            .then(
                response => {
                    this.refreshTasks()
                }
            )
    }

    deleteCompleteTasksClicked() {
        TaskDataService.deleteAllCompleteTasks()
            .then(
                response => {
                    console.log(response);
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
                                <th>Status</th>
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
                                            <td>
                                                <input className="check-large" onClick={() => this.checkBoxClicked(task.id, task.name, task.complete)} type="checkbox" name="complete" />
                                            </td>
                                            <td>{task.name}</td>
                                            <td>{String(task.complete).toUpperCase()}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTaskClicked(task.id)}>❌</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <hr></hr>
                    <div className="button-flex">
                        <button className="btn btn-danger" onClick={this.deleteCompleteTasksClicked}>Clear Complete Tasks</button>
                        <button className="btn btn-link" onClick={this.refreshTasks}>All Tasks</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTasksComponent