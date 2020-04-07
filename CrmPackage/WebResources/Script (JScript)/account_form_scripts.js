/// <reference path="MSXRMTOOLS.Xrm.Page.2016.js" />
/// <reference path="common.js" />

"use strict";

if (typeof (MSDYN365) === "undefined")
  window.MSDYN365 = {};

MSDYN365.Account = (function () {

  function onLoad(loadContext) {
    var v = MSDYN365.Common.getAttrVal("name");
    console.info("Name of account: ", v);

  }

  function onSave(saveContext) {

  }

  return {
    onLoad: onLoad,
    onSave: onSave
  }
})();

