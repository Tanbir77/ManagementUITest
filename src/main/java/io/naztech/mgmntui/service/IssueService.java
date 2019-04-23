package io.naztech.mgmntui.service;

import static ch.ralscha.extdirectspring.annotation.ExtDirectMethodType.STORE_MODIFY;
import static ch.ralscha.extdirectspring.annotation.ExtDirectMethodType.STORE_READ;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import ch.ralscha.extdirectspring.annotation.ExtDirectMethod;
import ch.ralscha.extdirectspring.bean.ExtDirectStoreResult;
import io.naztech.mgmntui.entity.Issue;


@Service
public class IssueService {

	@ExtDirectMethod(STORE_READ)
	public List<Issue> read() {
		List<Issue> list=new ArrayList<>();
		list.add(new Issue("error","dasdas","tanbir",1));
		list.add(new Issue("errofsfsdr","dasdasfgsdfs","tanbirul",2));
		return list;
	}

	@ExtDirectMethod(STORE_MODIFY)
	public ExtDirectStoreResult<Issue> create(Issue newIssue) {
		return null;
	}

	@ExtDirectMethod(STORE_MODIFY)
	public ExtDirectStoreResult<Issue> update(Issue changedIssue) {
		return null;
	}

	@ExtDirectMethod(STORE_MODIFY)
	public void destroy(Issue destroyedIssue) {
		
	}

}
