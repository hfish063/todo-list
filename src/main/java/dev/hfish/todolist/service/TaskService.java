package dev.hfish.todolist.service;

import dev.hfish.todolist.entity.Task;

import java.util.List;

public interface TaskService {
    public List<Task> findAll();
    public List<Task> findAllByCompletion();
    public Task findById(Long theId);
    public Task save(Task theTask);
    public void deleteById(Long theId);
}
