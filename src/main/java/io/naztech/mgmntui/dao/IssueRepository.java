package io.naztech.mgmntui.dao;

import org.springframework.data.repository.CrudRepository;

import io.naztech.mgmntui.entity.Issue;

public interface IssueRepository extends CrudRepository<Issue, Long> {
}
