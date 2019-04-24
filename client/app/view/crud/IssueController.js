Ext.define('Starter.view.crud.IssueController', {
	extend: 'Ext.app.ViewController',

	// onNamefilterChange(field, newValue) {
	// 	this.getViewModel().set('nameFilter', newValue);
	// },
  onNamefilterChange(field, value) {
    const issueStore = this.getStore('Issues');
    
    if (!Ext.isEmpty(value)) {
      issueStore.addFilter({
        id: 'nameFilter',
        filterFn: item => {
          const filterValue = value.toLowerCase();
          const issueName = item.get('issueName');
          const issueDescription = item.get('issueDescription');
          const submittedBy = item.get('submittedBy');

          if (!Ext.isEmpty(issueName)) {
            if (issueName.toLowerCase().indexOf(filterValue) >= 0) {
              return true;
            }
          }
          if (!Ext.isEmpty(issueDescription)) {
            if (issueDescription.toLowerCase().indexOf(filterValue) >= 0) {
              return true;
            }
          }
          if (!Ext.isEmpty(submittedBy)) {
            if (submittedBy.toLowerCase().indexOf(filterValue) >= 0) {
              return true;
            }
          }
          return false;
        }
      });
    }
    else {
      issueStore.removeFilter('nameFilter');
    }
  },


  deleteIssue() {
    Ext.Msg.confirm('Really delete?', 'Are you sure?', this.onDeleteIssueConfirm, this);
  },

	// issueRenderer(value) {
	// 	if (value) {
	// 		return Ext.getStore('Issues').getById(value).get('issueName');
	// 	}
	// 	return value;
	// },

	onDeleteIssueConfirm(choice) {
		if (choice === 'yes') {
			const selectedIssue = this.getViewModel().get('selectedIssue');
			selectedIssue.erase({
				callback: e => {
					Ext.toast({
						html: 'Issue deleted',
						title: 'Info',
						width: 200,
						align: 't',
						shadow: true
					});
					this.getStore('Issues').load();
				}
			});
		}
	},

	// onCancelEdit(editor, context, eOpts) {
	// 	if (context.record.phantom) {
	// 		this.getStore('Issues').remove(context.record);
	// 	}
	// },

	// onEdit() {
	// 	this.getStore('Issues').sync();
	// },

	newIssue() {
    var thisInstance=this;
    win = Ext.create('Ext.Window', {
     extend: 'Ext.window.Window',
     title: 'Report',
     iconCls: 'x-fa fa-plus',
     layout:'form',
     xtype:'form',
     width:400,
     plain: true,
     items: [{
      xtype : 'textfield',
      fieldLabel: 'Issue Name',
      name:'issueName'
    },{
      xtype : 'textarea',
      fieldLabel: 'Issue Description',
      name:'issueDescription'
    },{
      xtype : 'textfield',
      fieldLabel: 'Submitted By',
      name:'submittedBy'
    }
    ],
    dockedItems:[
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
                          var varissuename = this.up('window').down('textfield[name=issueName]').getValue();
                          var varissuedescription = this.up('window').down('textfield[name=issueDescription]').getValue();
                          var varissuesubmittedby = this.up('window').down('textfield[name=submittedBy]').getValue();

                          Ext.toast("Issue Name: "+varissuename+"<br>Description: "+varissuedescription+"<br>Submitted By: "+varissuesubmittedby);
                          var newIssue = new Starter.model.Issue({
                            issueName: varissuename,
                            issueDescription: varissuedescription,
                            submittedBy: varissuesubmittedby
                          });
                          console.log(newIssue);
                          thisInstance.getStore('Issues').insert(0, newIssue);
                          //thisInstance.getView().getPlugin('storePanelRowEditing').startEdit(0, 0);
                          win.close();

                        }
                      }
                      //saving an issue ends here
                    }
                    ]
                  }
                  ]
                }).show();

  },

});
