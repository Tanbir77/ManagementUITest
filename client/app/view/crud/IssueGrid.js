Ext.define('Starter.view.crud.IssueGrid', {
	extend: 'Ext.grid.Panel',
	
	requires: [ 'Ext.grid.plugin.RowEditing' ],

	controller: {
		xclass: 'Starter.view.crud.IssueController'
	},
	viewModel: {
		xclass: 'Starter.view.crud.IssueModel'
	},

	title: 'Management UI',
	bind: {
		store: '{Issues}',
		selection: '{selectedIssue}'
	},

	listeners: {
		canceledit: 'onCancelEdit',
		edit: 'onEdit'
	},

	columns: [{
		dataIndex: 'issueName',
		text: 'Issue Name',
		flex: 1,
		align: 'left',
		sortable : true
	}, {
		dataIndex: 'issueDescription',
		text: 'Issue Description',
		flex: 1,
		align: 'left',
		sortable : true
	}, {
		dataIndex: 'submittedBy',
		text: 'Submitted By',
		flex: 1,
		align: 'left',
		sortable : true
	},{
          text: 'Resolve',
           align: 'center',
           stopSelection: true,
           xtype: 'widgetcolumn',
           widget: {
                  xtype: 'button',
                  style:'background-color: #559966; background-image: none',
                  _btnText: "resolved",
                  defaultBindProperty: null, //important
                  handler: function(widgetColumn) {
                        var record = widgetColumn.getWidgetRecord();
                        Ext.MessageBox.confirm(
                        'Confirm', 'Are you sure you want to do this ?', callbackFunction);
                     function callbackFunction(btn) {
                        if(btn == 'yes') {
                           widgetColumn.disable();
                        } else {
                           widgetColumn.enable();
                        }
                     };
                  },
                  listeners: {
                        beforerender: function(widgetColumn){
                            var record = widgetColumn.getWidgetRecord();
                            widgetColumn.setText( widgetColumn._btnText ); //can be mixed with the row data if needed
                        }
                  }
            }
        }
	],
	dockedItems: [ {
		xtype: 'toolbar',
		dock: 'top',
		items: [ {
			iconCls: 'x-fa fa-plus',
			handler: 'newIssue'
		}, {
			text: 'Delete',
			handler: 'deleteIssue',
			bind: {
				disabled: '{!selectedIssue}'
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
					fn: 'onNamefilterChange',
					buffer: 350
				}
			},
			clearable: true
		}
		]
	}, {
		xtype: 'pagingtoolbar',
		reference: 'pagingtoolbar',
		dock: 'bottom',
		displayInfo: true,
		bind: {
			store: '{Issues}'//it will display those data which are stored on backend side
		}
	} ]

});