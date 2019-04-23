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
public class Org{
	
	private String orgName;

	private int orgNumber;

	private int id;
}
