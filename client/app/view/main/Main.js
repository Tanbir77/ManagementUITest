Ext.define('Starter.view.main.Main', {
    title:'Management UI',
    extend: 'Ext.tab.Panel',
	controller: {
		xclass: 'Starter.view.main.MainController'
	},
	viewModel: {
		xclass: 'Starter.view.main.MainModel'
	},

    requires:[
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Starter.view.crud.OrgGrid',
        'Starter.model.Org',
        'Ext.app.ViewController',
        'Ext.app.ViewModel'
    ],

	layout: {
		align: 'stretch',
		type: 'vbox'
	},
    items: [{
            title:'Issue',
            iconCls: 'x-fa fa-home',
            xclass: 'Starter.view.crud.IssueGrid',
            flex: 1,
            margins: 5
    },{
            title:'Organization',
            iconCls: 'x-fa fa-user',
            xclass: 'Starter.view.crud.OrgGrid',
            flex: 1,
            margins: 5
    },{
            title:'Site Meta Data',
            iconCls: 'x-fa fa-users',
            xclass: 'Starter.view.crud.SitemetaList'
    }   
    ]    
});
