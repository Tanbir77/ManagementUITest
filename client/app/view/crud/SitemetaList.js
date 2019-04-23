Ext.define('Starter.view.crud.SitemetaList', {
	extend: 'Ext.panel.Panel',
	
	requires:[
		'Ext.app.ViewModel',
		'Starter.view.crud.OrgController',
		'Starter.view.crud.OrgModel'
	],
	title: 'Management UI',
	items: [{
        xtype: 'combobox',
        fieldLabel: 'Choose Organization',
        fieldLabelStyle: 'width:220px',
        width: 350,
        padding: '20 20 0 0',
        // bind:{
        //         store: {
        //             type:'org'
        //         }
        //  },
		queryMode: 'local',
        displayField: 'OrgName',
        valueField: 'OrgName',
        id: 'genericFormCombo',
        forceSelection: false,
        multiSelect: false,
        typeahead: true
    }]
	
});