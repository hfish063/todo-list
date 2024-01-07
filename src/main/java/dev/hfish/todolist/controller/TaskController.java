//package dev.hfish.todolist.rest;
//
//import dev.hfish.todolist.entity.Task;
//import dev.hfish.todolist.service.TaskService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//public class TaskController {
//    TaskService taskService;
//
//    @Autowired
//    public TaskController(TaskService taskService) {
//        this.taskService = taskService;
//    }
//
//    @GetMapping("/all")
//    public List<Task> findAll() {
//        return taskService.findAll();
//    }
//
//    @GetMapping("/all/complete")
//    public List<Task> findAllCompleted() {
//        return taskService.findAllByCompletion();
//    }
//
//    @GetMapping("/task/{theId}")
//    public Task findTask(@PathVariable("theId") Long theId) {
//        return taskService.findById(theId);
//    }
//
//    @PostMapping("/task")
//    public Task save(Task theTask) {
//        // object assignment reserved for testing purposes - to be removed in future
//        theTask = new Task("Walk the dogs", "UUID", false);
//
//        return taskService.save(theTask);
//    }
//
//    @DeleteMapping("/task/{theId}")
//    public void delete(@PathVariable("theId") Long theId) {
//        taskService.deleteById(theId);
//    }
//}
