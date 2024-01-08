package dev.hfish.todolist.controller;

import dev.hfish.todolist.entity.Task;
import dev.hfish.todolist.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
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

    @GetMapping("/all/complete")
    public List<Task> findAllCompleted() {
        return taskService.findAllByCompletion();
    }

    @GetMapping("/task/{theId}")
    public Task findTask(@PathVariable("theId") Long theId) {
        return taskService.findById(theId);
    }

    @PostMapping("/task")
    public Task save(@RequestBody Task theTask) {
        return taskService.save(theTask);
    }

    @PutMapping("/task/complete")
    public Task completeTask(@RequestBody Task theTask) {
        return taskService.save(theTask);
    }

    @DeleteMapping("/task/{theId}")
    public void delete(@PathVariable("theId") Long theId) {
        taskService.deleteById(theId);
    }

    @DeleteMapping("/all/complete")
    public void deleteCompleteTasks() {
        taskService.deleteAllByCompletion();
    }
}
