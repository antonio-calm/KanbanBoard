package com.kalmykov.kanban.dao;

import com.kalmykov.kanban.model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface TaskDao extends CrudRepository<Task, Integer> {
}
