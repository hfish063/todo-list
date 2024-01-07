package dev.hfish.todolist.repository;

import dev.hfish.todolist.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
