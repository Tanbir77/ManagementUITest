Ext.define('Starter.view.crud.OrgGrid',{
	extend:'Ext.grid.Panel',
	requires: [ 'Ext.grid.plugin.RowEditing' ],
	controller: {
		xclass: 'Starter.view.crud.OrgController'
	},
	viewModel: {
		xclass: 'Starter.view.crud.OrgModel'
	},
	title: 'Management UI',
	bind: {
		store: '{Orgs}',
		selection: '{selectedOrg}'
	},

	listeners: {
		canceledit: 'onCancelEdit',
		edit: 'onEdit'
	},

	columns: [{
		dataIndex: 'orgName',
		text: 'Organization Name',
		flex: 1,
		align: 'left'
		// editor: {
		// 	xtype: 'textfield',
		// 	allowBlank: false
		// }
	}, {
		dataIndex: 'orgNumber',
		text: 'Contact Number',
		flex: 1,
		align: 'left'
		// editor: {
		// 	xtype: 'textfield',
		// 	allowBlank: false
		// }
	},
	{
      // xtype: 'checkcolumn',
      // text: 'Indoor?',
      // dataIndex: 'indoor',
      // width: 55
      xtype: 'checkcolumn',
      text:'Check',
      defaultType: 'checkboxfield',
      dataIndex:''
    }
	//  {
	// 	dataIndex: 'departmentId',
	// 	text: 'Department',
	// 	flex: 1,
	// 	renderer: 'departmentRenderer',
	// 	editor: {
	// 		xtype: 'combobox',
	// 		store: 'Departments',
	// 		queryMode: 'local',
	// 		displayField: 'name',
	// 		valueField: 'id'
	// 	}
	// }
	],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [ {
			iconCls: 'x-fa fa-plus',
			handler: 'newOrg'
		}, {
			iconCls: 'x-fa fa-refresh',
			handler: 'updateOrg'
			// bind: {
			// 	disabled: '{!selectedOrg}'
			// }
		},{
			text: 'Delete',
			handler: 'deleteOrg',
			bind: {
				disabled: '{!selectedOrg}'
			}
		}, '->',
		// {
		// 	emptyText: 'Search',
		// 	xtype: 'textfield',
		// 	listeners: {
		// 		change: {
		// 			fn: 'onNamefilterChange',
		// 			buffer: 350
		// 		}
		// 	},
		// 	triggers: {
		// 		clear: {
		// 			cls: 'x-form-clear-trigger',
		// 			weight: 1,
		// 			handler: function(tf) {
		// 				tf.reset();
		// 			}
		// 		}
		// 	}
		// }
		{
			emptyText: 'Search',
			xtype: 'textfield',
			listeners: {
				change: {
					fn: 'onNamefilterChangeOrg',
					buffer: 350
				}
			},
			clearable: true
		}
		// {
		// 	xtype: 'combobox',
		// 	reference: 'departmentFilterCB',
		// 	emptyText: 'Departments Filter',
		// 	store: 'Departments',
		// 	width: 200,
		// 	queryMode: 'local',
		// 	displayField: 'name',
		// 	valueField: 'id',
		// 	publishes: 'value',
		// 	triggers: {
		// 		clear: {
		// 			cls: 'x-form-clear-trigger',
		// 			weight: 1,
		// 			handler: function(cb) {
		// 				cb.reset();
		// 			}
		// 		}
		// 	}
		// }
		]
	}, {
		xtype: 'pagingtoolbar',
		reference: 'pagingtoolbar',
		dock: 'bottom',
		displayInfo: true,
		bind: {
			store: '{Orgs}'//it will display those data which are stored on backend side
		}
	} ]
});