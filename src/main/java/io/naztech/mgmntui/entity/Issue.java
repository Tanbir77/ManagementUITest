package io.naztech.mgmntui.entity;

import ch.rasc.extclassgenerator.Model;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Model(value = "Starter.model.Issue", identifier = "negative", rootProperty = "records",
		createMethod = "issueService.create", readMethod = "issueService.read",
		updateMethod = "issueService.update", destroyMethod = "issueService.destroy",
		autodetectTypes = false)

@Data
@RequiredArgsConstructor
public class Issue{
	
	public Issue(String name, String desc, String submittedBy, int id) {
		issueName=name;
		issueDescription=desc;
		this.submittedBy=submittedBy;
		this.id=id;
	}

	private String issueName;

	//@NotNull
	private String issueDescription;

	//@Email
	private String submittedBy;

	private int id;
}
