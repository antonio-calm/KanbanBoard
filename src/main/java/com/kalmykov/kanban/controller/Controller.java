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
        cardDao.save(new Card(null, "Learn something", "Something does not mean anything, ok? Something not stupid, ok?", Card.Status.TODO));
        cardDao.save(new Card(null, "Become superstar", "Rockstar will also work, or something like Bruce Willis.", Card.Status.TODO));
        cardDao.save(new Card(null, "Live a life", "Well start from birth, and finish with death. Not so hard.", Card.Status.DOING));
        cardDao.save(new Card(null, "Become cool", "You know what I mean.", Card.Status.DONE));
    }

    @RequestMapping(value ="/cards", method = RequestMethod.GET)
    public List<Card> getCards(){
        return (List<Card>) cardDao.findAll();
    }

    @RequestMapping(value = "/cards/add", method = RequestMethod.POST)
    public void addCard(@RequestParam(value = "title") String title,
                        @RequestParam(value = "description") String description){
        cardDao.save(new Card(null, title, description, Card.Status.TODO));
    }

    @RequestMapping(value = "/card/{id}", method = RequestMethod.DELETE)
    public void deleteCard(@PathVariable long id){
        cardDao.delete(id);
    }

    @RequestMapping(value = "/card/{id}", method = RequestMethod.PUT)
    public void updateCardStatus(@PathVariable long id,
                                 @RequestParam(value = "status") Card.Status status){
        Card card = cardDao.findOne(id);
        card.setStatus(status);
        cardDao.save(card);
    }
}
