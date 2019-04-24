package io.naztech.mgmntui.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import ch.rasc.extclassgenerator.Model;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;

/**
 * Issue Model.
 * 
 * @author Tanbirul Hashan
 * @since 2019-04-23
 */
@Model(value = "Starter.model.Issue", identifier = "negative", rootProperty = "records", createMethod = "issueService.create", readMethod = "issueService.read", updateMethod = "issueService.update", destroyMethod = "issueService.destroy", autodetectTypes = false)
@Entity
@Table(name = "T_ISSUE", schema = "dbo")
@Data @Accessors(chain = true) @NoArgsConstructor @RequiredArgsConstructor
public class Issue implements Serializable {
	private static final long serialVersionUID = -1100635357877038050L;
	
	/** Id of a issue */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_issue_key", nullable = false)
	private long id;
	
	/** Name of a issue */
	@Column(name = "tx_issue_name", nullable = false)
	@NonNull private String issueName;
	
	/** Issue description */
	@Column(name = "tx_issue_description", nullable = false)
	@NonNull private String issueDescription;
	
	/** By whom issue is submitted */
	@Column(name = "tx_submitted_by", nullable = false)
	@NonNull private String submittedBy;
}
