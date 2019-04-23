Ext.define('Starter.view.crud.OrgModel', {
	extend: 'Ext.app.ViewModel',

	data: {
		selectedOrg: null,
		nameFilter: null
		// departmentFilterCB: null
	},

	stores: {
		Orgs: {
			// model: 'Starter.model.Org',
			// autoLoad: true,
			// pageSize: 25,
			// remoteSort: true,
			// remoteFilter: true,
			// autoSync: false,
			// sorters: [{
			// 	property: 'orgName',
			// 	direction: 'ASC'
			// }],
			// filters: [{
			// 	property: 'name',
			// 	value: '{nameFilter}'
			// }
			// // {
			// // 	property: 'department',
			// // 	value: '{departmentFilterCB.value}'
			// // }
			// ]
			model: 'Starter.model.Org',
			autoLoad: true,
			pageSize: 0,
			remoteSort: false,
			remoteFilter: false,
			autoSync: true,
			sorters: [{
				property: 'orgName',
				direction: 'ASC'
			},{
				property: 'orgNumber',
				direction: 'ASC'
			}]
		}
	}

});