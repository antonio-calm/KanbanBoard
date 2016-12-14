package com.kalmykov.kanban.controller;

import com.kalmykov.kanban.dao.CardDao;
import com.kalmykov.kanban.model.Card;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@RestController
public class Controller{
    @Autowired
    private CardDao cardDao;

    @PostConstruct
    public void generate() {
        cardDao.save(new Card(null, "Work", "Work hard!", "todo"));
        cardDao.save(new Card(null, "Study", "Study hard!", "doing"));
        cardDao.save(new Card(null, "Sleep", "Sleep hard!", "done"));
    }

    @RequestMapping(value ="/cards", method = RequestMethod.GET)
    public List<Card> getCards(){
        return (List<Card>) cardDao.findAll();
    }

    @RequestMapping(value = "/cards/add", method = RequestMethod.POST)
    public void addCard(@RequestParam(value = "title") String title,
                        @RequestParam(value = "description") String description){
        cardDao.save(new Card(null, title, description, "todo"));
    }

    @RequestMapping(value = "/card/delete/{id}", method = RequestMethod.POST)
    public void deleteCard(@PathVariable long id){
        cardDao.delete(id);
    }

    @RequestMapping(value = "/cards/{id}", method = RequestMethod.PUT)
    public void updateCardStatus(@PathVariable Long id,
                                 @RequestParam(value = "status") String status){
        cardDao.findOne(id).setStatus(status);
    }
}
