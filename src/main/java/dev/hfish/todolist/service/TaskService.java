package dev.hfish.todolist.service;

import dev.hfish.todolist.entity.Task;

import java.util.List;

public interface TaskService {
    public List<Task> findAll();
    public Task save(Task theTask);
}
