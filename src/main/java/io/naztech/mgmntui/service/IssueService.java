package io.naztech.mgmntui.service;

import static ch.ralscha.extdirectspring.annotation.ExtDirectMethodType.STORE_MODIFY;
import static ch.ralscha.extdirectspring.annotation.ExtDirectMethodType.STORE_READ;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.ralscha.extdirectspring.annotation.ExtDirectMethod;
import ch.ralscha.extdirectspring.bean.ExtDirectStoreResult;
import io.naztech.mgmntui.dao.IssueRepository;
import io.naztech.mgmntui.entity.Issue;

/**
 * Issue Service.
 * 
 * @author Tanbirul Hashan
 * @since 2019-04-23
 */
@Service
public class IssueService {
	
	@Autowired
	private IssueRepository repo;

	@ExtDirectMethod(STORE_READ)
	public Iterable<Issue> read() {
		return repo.findAll();
	}

	@ExtDirectMethod(STORE_MODIFY)
	public ExtDirectStoreResult<Issue> create(Issue newIssue) {
		return new ExtDirectStoreResult<>(repo.save(newIssue));
	}

	@ExtDirectMethod(STORE_MODIFY)
	public ExtDirectStoreResult<Issue> update(Issue changedIssue) {
		return null;
	}

	@ExtDirectMethod(STORE_MODIFY)
	public void destroy(Issue destroyedIssue) {
		
	}

}
