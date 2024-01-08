import axios from "axios";

const TASK_API_URL = "http://localhost:8080/api"

class TaskDataService {
    retrieveAllTasks() {
        console.log("Request sent...");
        return axios.get(`${TASK_API_URL}/all`);
    }

    retrieveAllCompleteTasks() {
        console.log("Request sent...")
        return axios.get(`${TASK_API_URL}/all/complete`);
    }

    retrieveTask(id) {
        console.log("Sending GET request for specific task retrieval")
        return axios.get(`${TASK_API_URL}/task/${id}`)
    }

    createTask(task) {
        console.log("Sending POST request for task creation...")
        console.log("POST request data - " + task)
        return axios.post(`${TASK_API_URL}/task`, task, {headers:{"Content-Type": "application/json"}});
    }

    updateTask(task) {
        console.log("Sending PUT request for task update...")
        console.log("PUT request data - " + task)
        return axios.put(`${TASK_API_URL}/task/complete`, task, {headers:{"Content-Type": "application/json"}});
    }

    deleteTask(id) {
        console.log("Executed 'deleteTask' service")
        return axios.delete(`${TASK_API_URL}/task/${id}`);
    }

    deleteAllCompleteTasks() {
        console.log("Executed 'deleteAllCompleteTasks' service")
        return axios.delete(`${TASK_API_URL}/all/complete`);
    }
}

export default new TaskDataService()