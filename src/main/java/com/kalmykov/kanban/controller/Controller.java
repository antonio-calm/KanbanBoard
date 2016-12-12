package com.kalmykov.kanban.controller;

import com.kalmykov.kanban.dao.TaskDao;
import com.kalmykov.kanban.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @RequestMapping("/task/{id}")
    public Task getTask(@PathVariable int id){
        return taskDao.findOne(id);
    }
}
