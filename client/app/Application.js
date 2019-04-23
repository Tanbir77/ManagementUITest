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
	onAppUpdate() {
		window.location.reload();
	}
});
