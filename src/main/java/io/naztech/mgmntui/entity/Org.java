package io.naztech.mgmntui.entity;

import ch.rasc.extclassgenerator.Model;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Model(value = "Starter.model.Org", identifier = "negative", rootProperty = "records",
		createMethod = "orgService.create", readMethod = "orgService.read",
		updateMethod = "orgService.update", destroyMethod = "orgService.destroy",
		autodetectTypes = false)

@Data
@RequiredArgsConstructor
public class Org {

	public Org(String name, int number, int id) {
		this.orgName = name;
		this.orgNumber = number;
		this.id = id;
	}

	private String orgName;

	private int orgNumber;

	private int id;
}
