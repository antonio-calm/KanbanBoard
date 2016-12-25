package com.kalmykov.kanban;

import com.kalmykov.kanban.controller.Controller;
import com.kalmykov.kanban.dao.CardDao;
import com.kalmykov.kanban.model.Card;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.List;

import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class ControllerTests {
    @Mock
    private CardDao cardDao;
    @InjectMocks
    Controller controller;

    @Test
    public void testFindAll(){
        when(cardDao.findAll()).thenReturn(mock(List.class));
        controller.getCards();
        verify(cardDao).findAll();
    }

    @Test
    public void testAddCard(){
        controller.addCard("testTitle", "testDescription");
        verify(cardDao).save(new Card(null, "testTitle", "testDescription", Card.Status.TODO));
    }

    @Test
    public void testDeleteCard(){
        long id = 12345;
        controller.deleteCard(id);
        verify(cardDao).delete(id);
    }

    @Test
    public void testUpdateCardStatus(){
        long id = 12345;
        when(cardDao.findOne(id)).thenReturn(new Card(id, "testTitle", "testDescription", null));
        controller.updateCardStatus(id, Card.Status.TODO);
        verify(cardDao).findOne(id);
        verify(cardDao).save(new Card(id, "testTitle", "testDescription", Card.Status.TODO));
    }
}
