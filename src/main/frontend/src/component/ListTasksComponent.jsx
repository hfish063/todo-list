import React, {Component} from "react";
import TaskDataService from "../service/TaskDataService";
import axios from "axios";

class ListTasksComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.refreshTasks = this.refreshTasks.bind(this)
        this.deleteTaskClicked = this.deleteTaskClicked.bind(this)
    }

    componentDidMount() {
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
                <div className="container">
                    <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
                    <br></br>
                    <br></br>
                    <table className="table">
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
                            {/* <tr>
                                <td>Null</td>
                                <td>Null</td>
                                <td>Null</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTasksComponent