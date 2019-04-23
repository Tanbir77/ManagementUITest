package io.naztech.mgmntui.service;

import static ch.ralscha.extdirectspring.annotation.ExtDirectMethodType.STORE_MODIFY;
import static ch.ralscha.extdirectspring.annotation.ExtDirectMethodType.STORE_READ;

import java.util.List;

import org.springframework.stereotype.Service;

import ch.ralscha.extdirectspring.annotation.ExtDirectMethod;
import ch.ralscha.extdirectspring.bean.ExtDirectStoreResult;
import io.naztech.mgmntui.entity.Issue;
import io.naztech.mgmntui.entity.Org;


@Service
public class OrgService {

	@ExtDirectMethod(STORE_READ)
	public List<Org> read() {
//		List<Org> list=new ArrayList<>();
//		list.add(new Org("naztech",552485,1));
//		return list;
		return null;
	}

	@ExtDirectMethod(STORE_MODIFY)
	public ExtDirectStoreResult<Org> create(Issue newIssue) {
		return null;
	}

	@ExtDirectMethod(STORE_MODIFY)
	public ExtDirectStoreResult<Org> update(Issue changedIssue) {
		return null;
	}

	@ExtDirectMethod(STORE_MODIFY)
	public void destroy(Org destroyedIssue) {
		
	}

}
