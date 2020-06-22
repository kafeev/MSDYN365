/// <reference path="MSXRMTOOLS.Xrm.Page.2016.js" />
/// <reference path="common.js" />

"use strict";

if (typeof (MSDYN365) === "undefined")
  window.MSDYN365 = {};

MSDYN365.Account = (function () {

  function onLoad(loadContext) {
    var v = MSDYN365.Common.getAttrVal("name");
    console.info("Name of account: ", v);

    let accEnt = MSDYN365.WebApi.getEntity("accounts", "$select=name,createdon,statecode,_ownerid_value", Xrm.Page.data.entity.getId(), true);
  }

  function onSave(saveContext) {

  }

  return {
    onLoad: onLoad,
    onSave: onSave
  }
})();

