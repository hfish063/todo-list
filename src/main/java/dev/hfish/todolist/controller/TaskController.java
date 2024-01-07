package dev.hfish.todolist.controller;

import dev.hfish.todolist.entity.Task;
import dev.hfish.todolist.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {
    TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/all")
    public List<Task> findAll() {
        return taskService.findAll();
    }

    @PostMapping("/task")
    public Task save(Task theTask) {
        theTask = new Task("0", "Homework", false);
        return taskService.save(theTask);
    }
}
