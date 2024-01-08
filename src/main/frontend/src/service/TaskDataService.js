import axios from "axios";

const TASK_API_URL = "http://localhost:8080/api"

class TaskDataService {
    retrieveAllTasks() {
        console.log("Request sent...");
        return axios.get(`${TASK_API_URL}/all`);
    }

    deleteTask(id) {
        console.log("Executed 'deleteTask' service")
        return axios.delete(`${TASK_API_URL}/task/${id}`);
    }
}

export default new TaskDataService()