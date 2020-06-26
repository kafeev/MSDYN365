/// <reference path="MSXRMTOOLS.Xrm.Page.2016.js" />
/// <reference path="common.js" />

"use strict";

if (typeof (MSDYN365) === "undefined")
  window.MSDYN365 = {};

MSDYN365.Account = (function () {


  function onLoad(loadContext) {
    var v = MSDYN365.Common.getAttrVal("name");
    console.info("Name of account: ", v);

    let entity = {
      "name": "Account " + (new Date()).toString(),
      "telephone1": "+79221234567"
    }
    let entityApi = MSDYN365.WebApi.entity;

    entityApi.put("accounts", entity)
      .then(function (data, status, xrh) {
        let entityUrl = xrh.getResponseHeader("OData-EntityId");
        let id = /\((.+)\)/.exec(entityUrl)[1];

        console.info("Create account: id ", id);

        entityApi.get("accounts", "$select=name,telephone1,createdon,statecode,_ownerid_value", id)
          .then(function (data) {
            console.info("Before update", data);          
            entity.name = "Account after update";
            
            let res = entityApi.patch("accounts", entity, data.accountid, true);

          })
          .fail(function (err) {

          });
      })
      .fail(function myfunction() {

      });


    //MSDYN365.WebApi.getEntity("accounts", "$select=name,createdon,statecode,_ownerid_value", entity.id)
    //  .then(function (data) {
    //    console.log(data);
    //  })
    //  .fail(function (err) {

    //  });



  }

  function onSave(saveContext) {

  }

  return {
    onLoad: onLoad,
    onSave: onSave
  }
})();

