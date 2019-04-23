Ext.define("Starter.model.Org",
{
  extend : "Ext.data.Model",
  requires : [ "Ext.data.proxy.Direct", "Ext.data.identifier.Negative" ],
  identifier : "negative",
  fields : [ "orgName", "orgNumber", "id" ],
  proxy : {
    type : "direct",
    api : {
      read : "orgService.read",
      create : "orgService.create",
      update : "orgService.update",
      destroy : "orgService.destroy"
    },
    reader : {
      rootProperty : "records"
    },
    writer : {
      writeAllFields : true
    }
  }
});