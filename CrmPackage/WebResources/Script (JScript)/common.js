/// <reference path="MSXRMTOOLS.Xrm.Page.2016.js" />


"user strict";

if (typeof (MSDYN365) === "undefined")
  window.MSDYN365 = {};

// доступа к formContext в кнопках на ribbon
// https://www.magnetismsolutions.com/blog/alfwynjordan/2019/10/02/getting-dynamics-365-formcontext-from-ribbon-workbench

MSDYN365.Common = (function () {

  let xp = Xrm.Page;

  /// <summary>получить значение</summary>
  function _getAttrVal(attrName) {
    let v = xp.getAttribute(attrName);
    if (v)
      return v.getValue();
    else
      throw new Error(`Атрибут ${attrName} не найден на форме!`)
  }

  /// <summary>получить значение text для отрибута (например picklist или lookupValue.name)</summary>
  function _getAttrText(attrName) {
    let attr = xp.getAttribute(attrName);
    let text;

    if (!attr.getValue())
      return "";


    switch (attr.getAttributeType()) {
      case "optionset":
        text = attr.getText();
        break;
      case "lookup":
        text = attr.getValue()[0].name;
        break;
      default:
        break;
    }

    return text;
  }

  /// <summary>присвоить значение</summary>
  function _setAttrVal(attrName, val) {
    let v = Xrm.Page.getAttribute(attrName);
    if (v) {
      v.setValue(val);
    }
    else
      throw new Error(`Атрибут ${attrName} не найден на форме!`)
  }



  function _hidePickListOptions(attrName, values4hide, showOthers) {

  }

  function _showPickListOptions(attrName, values4show, hideOthers) {

  }


  function _setLookupValue() {

  }

  function _setLookupCustomView() {

  }

  function _setPreSearchFetch() {

  }

  return {
    getAttrVal: _getAttrVal,
    getAttrtext: _getAttrText,
    setAttrVal: _setAttrVal
  }
})();

/// <summary>блокирует форму на время ожидания</summary>
MSDYN365.Loader = (function () {

  /// <summary>присвоить значение</summary>
  function _show(text) {

  }

  function _hide() {

  }

  return {
    show: _show,
    hide: _hide
  }

})();

MSDYN365.WebApi = function () {

  function _get() {

  }

  function _fetch() {

  }

  function _update() {

  }

  function _delete() {

  }

  function _create() {

  }

  function _executeAction() {

  }



  return {
    getEntity: _get,
    fetch: _fetch,
    updateEntity: _update,
    deleteEntity: _delete,
    create: _create,
    executeAction: _executeAction
  }
}