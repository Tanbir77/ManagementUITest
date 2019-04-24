--CREATE T_ISSUE;
CREATE TABLE T_ISSUE(
	  id_issue_key			bigint	Identity	NOT NULL	PRIMARY KEY -- Identity of a issue
	, tx_issue_name			varchar(50)	UNIQUE	NOT NULL	DEFAULT '?'	-- Name of a issue
	, tx_issue_description	varchar(max)		NOT NULL	DEFAULT '?'	-- Issue Description
	, tx_submitted_by		varchar(50)		NOT NULL	DEFAULT '?'	-- Issue submitted by
);