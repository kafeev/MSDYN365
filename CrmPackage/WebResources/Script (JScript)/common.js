/// <reference path="MSXRMTOOLS.Xrm.Page.2016.js" />


"user strict";

if (typeof (MSDYN365) === "undefined")
  window.MSDYN365 = {};


MSDYN365.Common = (function () {

  /// <summary>получить значение</summary>
  function _getAttrVal(attrName) {
    let v = Xrm.Page.getAttribute(attrName);
    if (v)
      return v.getValue();
    else
      throw new Error(`Атрибут ${attrName} не найден на форме!`)
  }

  /// <summary>присвоить значение</summary>
  function _setAttrVal(attrName, val) {
    let v = Xrm.Page.getAttribute(attrName);
    if (v) {
      v.setValue(val);
    }
  }

  return {
    getAttrVal: _getAttrVal,
    setAttrVal: _setAttrVal
  }
})();
