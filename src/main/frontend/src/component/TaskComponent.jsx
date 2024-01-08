import { ErrorMessage, Field, Formik, Form } from "formik";
import { Component } from "react";
import { Link } from "react-router-dom";
import TaskDataService from "../service/TaskDataService";

class TaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: "UUID",
            name: "",
            isComplete: false
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let task = JSON.stringify ({
            userId: this.state.userId,
            name: values.name,
            isComplete: this.state.isComplete
        });

        TaskDataService.createTask(task)

        console.log(values)
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={this.state}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>New Task</label>
                                    <Field className="form-control" type="text" name="name" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}

export default TaskComponent