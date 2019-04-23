Ext.define('Starter.view.crud.IssueModel', {
	extend: 'Ext.app.ViewModel',

	data: {
		selectedIssue: null,
		nameFilter: null
		// departmentFilterCB: null
	},

	stores: {
		Issues: {
			// model: 'Starter.model.Issue',
			// autoLoad: true,
			// pageSize: 25,
			// remoteSort: true,
			// remoteFilter: true,
			// autoSync: false,
			// sorters: [ {
			// 	property: 'issueName',
			// 	direction: 'ASC'
			// } ],
			// filters: [{
			// 	property: 'IssueStore',
			// 	value: '{nameFilter}'
			// }
			// ]

			model: 'Starter.model.Issue',
			autoLoad: true,
			pageSize: 0,
			remoteSort: false,
			remoteFilter: false,
			autoSync: true,
			sorters: [ {
				property: 'issueName',
				direction: 'ASC'
			},{
				property: 'issueDescription',
				direction: 'ASC'
			},{
				property: 'submittedBy',
				direction: 'ASC'
			} ]
		}
	}

});