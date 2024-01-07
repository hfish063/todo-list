package dev.hfish.todolist.service;

import dev.hfish.todolist.entity.Task;
import dev.hfish.todolist.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public Task save(Task theTask) {
        return taskRepository.save(theTask);
    }
}
