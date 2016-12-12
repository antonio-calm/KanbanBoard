package com.kalmykov.kanban.controller;

import com.kalmykov.kanban.dao.TaskDao;
import com.kalmykov.kanban.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller{
    @Autowired
    private TaskDao taskDao;

    @RequestMapping(value ="/tasks", method = RequestMethod.GET)
    public List<Task> getTasks(){
        return (List<Task>)taskDao.findAll();
    }

    @RequestMapping(value = "/tasks/add", method = RequestMethod.POST)
    public void addTask(@RequestParam(value = "title") String title,
                        @RequestParam(value = "description") String description,
                        @RequestParam(value = "status") String status){
        taskDao.save(new Task(null, title, description, status));
    }

    @RequestMapping(value = "/task/{id}", method = RequestMethod.DELETE)
    public void removeTask(@PathVariable Long id){
        taskDao.delete(id);
    }

    @RequestMapping(value = "/task/{id}", method = RequestMethod.PUT)
    public void updateTaskStatus(@PathVariable Long id,
                                 @RequestParam(value = "status") String status){
        taskDao.findOne(id).setStatus(status);
    }
}
