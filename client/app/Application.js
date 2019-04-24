Ext.define('Starter.Application', {
	extend: 'Ext.app.Application',
	requires: [ 'Ext.plugin.Viewport', 'Ext.direct.*', 'Ext.form.action.DirectLoad', 'Ext.form.action.DirectSubmit', 'Ext.window.Toast' ],
	name: 'Starter',

	controllers: [ 'Root' ],

	// stores: [ 'Companies', 'Departments' ],

	models: ['Issue' ,'Org'],// 'PageHit', 

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    constructor() {
  		REMOTING_API.url = serverUrl + REMOTING_API.url;
  		Ext.direct.Manager.addProvider(REMOTING_API);
  		this.callParent(arguments);
	},
	onAppUpdate() {
		window.location.reload();
	}
});
