Ext.define("Starter.model.Issue",
{
  extend : "Ext.data.Model",
  requires : [ "Ext.data.proxy.Direct", "Ext.data.identifier.Negative" ],
  identifier : "negative",
  fields : [ "id", "issueName", "issueDescription", "submittedBy" ],
  proxy : {
    type : "direct",
    api : {
      read : "issueService.read",
      create : "issueService.create",
      update : "issueService.update",
      destroy : "issueService.destroy"
    },
    reader : {
      rootProperty : "records"
    },
    writer : {
      writeAllFields : true
    }
  }
});