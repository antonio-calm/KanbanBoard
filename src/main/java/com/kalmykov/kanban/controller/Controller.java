package com.kalmykov.kanban.controller;

import com.kalmykov.kanban.dao.TaskDao;
import com.kalmykov.kanban.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller{
    @Autowired
    private TaskDao taskDao;

    @RequestMapping("/tasks")
    public List<Task> getTasks(){
        return (List<Task>)taskDao.findAll();
    }

    @RequestMapping("/tasks/add")
    public void addTask(@RequestParam(value = "title") String title,
                        @RequestParam(value = "description") String description,
                        @RequestParam(value = "status") String status){
        taskDao.save(new Task(null, title, description, status));
    }

    @RequestMapping("/task/{id}")
    public void removeTask(@PathVariable Long id){
        taskDao.delete(id);
    }
}
