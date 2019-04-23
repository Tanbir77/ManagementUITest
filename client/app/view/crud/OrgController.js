Ext.define('Starter.view.crud.OrgController', {
	extend: 'Ext.app.ViewController',

	// onNamefilterChange(field, newValue) {
	// 	this.getViewModel().set('nameFilter', newValue);
	// },

  onNamefilterChangeOrg(field, value) {
    const orgStore = this.getStore('Orgs');
    
    if (!Ext.isEmpty(value)) {
      orgStore.addFilter({
        id: 'nameFilterorg',
        filterFn: item => {
          const filterValue = value.toLowerCase();
              const orgName = item.get('orgName');
              const orgNumber = item.get('orgNumber');
              
              if (!Ext.isEmpty(orgName)) {
                if (orgName.toLowerCase().indexOf(filterValue) >= 0) {
                  return true;
                }
              }
              if (!Ext.isEmpty(orgNumber)) {
                if (orgNumber.toLowerCase().indexOf(filterValue) >= 0) {
                  return true;
                }
              }
              return false;
          }
      });
    }
    else {
      orgStore.removeFilter('nameFilterorg');
    }
  },

	deleteOrg() {
		Ext.Msg.confirm('Really delete?', 'Are you sure?', this.onDeleteOrgConfirmOrg, this);
	},

	// departmentRenderer(value) {
	// 	if (value) {
	// 		return Ext.getStore('Departments').getById(value).get('name');
	// 	}
	// 	return value;
	// },

	// onDeleteOrgConfirm(choice) {
	// 	if (choice === 'yes') {
	// 		const selectedOrg = this.getViewModel().get('selectedOrg');
	// 		selectedOrg.erase({
	// 			callback: e => {
	// 				Ext.toast({
	// 					html: 'Org deleted',
	// 					title: 'Info',
	// 					width: 200,
	// 					align: 't',
	// 					shadow: true
	// 				});
	// 				this.getStore('Orgs').load();
	// 			}
	// 		});
	// 	}
	// },
  onDeleteOrgConfirmOrg(choice) {
    if (choice === 'yes') {
      const selectedOrg = this.getViewModel().get('selectedOrg');
      selectedOrg.erase({
        callback: e => {
          Ext.toast({
            html: 'Organization deleted',
            title: 'Info',
            width: 200,
            align: 't',
            shadow: true
          });
          this.getStore('Orgs').load();
        }
      });
    }
  },

	// onCancelEdit(editor, context, eOpts) {
	// 	if (context.record.phantom) {
	// 		this.getStore('Orgs').remove(context.record);
	// 	}
	// },

	// onEdit() {
	// 	this.getStore('Orgs').sync();
	// },

	newOrg() {
		
			// issueName: 'issue Name',
			// issueDescription: 'Description',
			// submittedby:'Submittedby'
			// submittedby: 'new@submittedby.com'
			// department: 'Customer Service'
			
		// issueName: varissuename,
		// issueDescription: varissuedescription,
		// submittedby:varissuesubmittedby
		
		win = Ext.create('Ext.Window', {
                 extend: 'Ext.window.Window',
                 title: 'Add Organization',
                 iconCls: 'x-fa fa-plus',
                 layout:'form',
                 xtype:'form',
                 width:400,
                 plain: true,
                 items: [{
                      xtype : 'textfield',
                      fieldLabel: 'Organization Name',
                      name:'orgName'
                    },{
                      xtype : 'textarea',
                      fieldLabel: 'Contact Number',
                      name:'orgNumber'
                    }
               ],
               dockedItems:[//buttons replaced by dockedItems
               {
                  xtype:'toolbar',
                  dock: 'bottom',
                  ui:'footer',
                  items:[
                    {
                      xtype:'button',
                      text:'Cancel',
                      handler:function(){
                        win.close();
                      }
                    },'->',{
                      xtype:'button',
                      text:'Save',
                      //Saving an issue starts from here
                      listeners:{
                      click:function()
                      {
                        var varorgname = this.up('window').down('textfield[name=orgName]').getValue();
                        var varorgnumber = this.up('window').down('textfield[name=orgNumber]').getValue();
                        

                        Ext.toast("Org Name: "+varorgname+"<br>Description: "+varorgnumber);
                        // alert("Data: \n"+varissuename+"\n"+varissuedescription+"\n"+varissuesubmittedby);
                        // dataStore.add({issueName:varissuename},{issueDescription:varissuedescription},{submittedby:varissuesubmittedby});
                        
                        }
                      }
                      //saving an issue ends here
                    }
                  ]
                }
               ]
                }).show();
		// issueName: varissuename,
		// issueDescription: varissuedescription,
		// submittedby:varissuesubmittedby
    const newOrg = new Starter.model.Org({

      orgName: varorgname,

      orgNumber: varorgnumber

    });
		this.getStore('Orgs').insert(0, newOrg);
		this.getView().getPlugin('storePanelRowEditing').startEdit(0, 0);
	},
	updateOrg(){
		win2 = Ext.create('Ext.Window', {
                 extend: 'Ext.window.Window',
                 title: 'Update Organization',
                 iconCls: 'x-fa fa-refresh',
                 layout:'form',
                 xtype:'form',
                 width:400,
                 plain: true,
                 items: [{
                      xtype : 'textfield',
                      fieldLabel: 'Organization Name',
                      name:'orgName'
                    },{
                      xtype : 'textarea',
                      fieldLabel: 'Contact Number',
                      name:'orgNumber'
                    }
               ],
               dockedItems:[//buttons replaced by dockedItems
               {
                  xtype:'toolbar',
                  dock: 'bottom',
                  ui:'footer',
                  items:[
                    {
                      xtype:'button',
                      text:'Cancel',
                      handler:function(){
                        win.close();
                      }
                    },'->',{
                      xtype:'button',
                      text:'Save',
                      //Saving an issue starts from here
                      listeners:{
                      click:function()
                      {
                        var varorgname = this.up('window').down('textfield[name=orgName]').getValue();
                        var varorgnumber = this.up('window').down('textfield[name=orgNumber]').getValue();
                        

                        Ext.toast("Org Name: "+varorgname+"<br>Description: "+varorgnumber);
                        // alert("Data: \n"+varissuename+"\n"+varissuedescription+"\n"+varissuesubmittedby);
                        // dataStore.add({issueName:varissuename},{issueDescription:varissuedescription},{submittedby:varissuesubmittedby});
                        
                        }
                      }
                      //saving an issue ends here
                    }
                  ]
                }
               ]
                }).show();
		// issueName: varissuename,
		// issueDescription: varissuedescription,
		// submittedby:varissuesubmittedby
		this.getStore('Orgs').insert(0, newOrg);
		this.getView().getPlugin('storePanelRowEditing').startEdit(0, 0);
	}

});