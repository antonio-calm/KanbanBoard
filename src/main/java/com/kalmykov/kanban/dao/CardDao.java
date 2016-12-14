package com.kalmykov.kanban.dao;

import com.kalmykov.kanban.model.Card;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CardDao extends CrudRepository<Card, Long> {
}
