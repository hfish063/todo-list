package dev.hfish.todolist.service;

import dev.hfish.todolist.entity.Task;
import dev.hfish.todolist.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {
    private TaskRepository  taskRepository;

    @Autowired
    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    /**
     * Returns list of all task entries in corresponding database table
     * usage: find every task we are currently storing
     *
     * @return List containing every Task element stored in database
     */
    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    /**
     * Returns list of all tasks where isComplete is TRUE (task is marked as 'complete')
     * usage: find every task that has been completed
     *
     * @return List of every Task element in db where completion status is TRUE
     */
    // TODO: fix ignorant method implementation (no need to query for every element)
    @Override
    public List<Task> findAllByCompletion() {
        List<Task> taskList = taskRepository.findAll();
        List<Task> completedTaskList = new ArrayList<>();

        for(Task currentTask : taskList) {
            if (currentTask.isComplete()) {
                completedTaskList.add(currentTask);
            }
        }

        return completedTaskList;
    }

    /**
     * Finds Task stored in db with corresponding id, if result is not found
     * throw RuntimeException
     *
     * @param theId id value (column) of task we are searching for in db
     * @return Task obtained from db if available, else throw exception
     */
    @Override
    public Task findById(Long theId) {
        Optional<Task> result = taskRepository.findById(theId);

        if (result.isEmpty()) {
            throw new RuntimeException("Could not locate task with id - " + theId);
        }

        return result.get();
    }

    @Override
    public Task save(Task theTask) {
        return taskRepository.save(theTask);
    }

    @Override
    public void deleteById(Long theId) {
        taskRepository.deleteById(theId);
    }
}
