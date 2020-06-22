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
    let v = xp.getAttribute(attrName);
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

/// <summary>методы для работы с CRM WebApi</summary>
MSDYN365.WebApi = (function () {

  let _webApiUrl = (Xrm.Page.context.getClientUrl() || location.protocol + "//" + location.host) + "/api/data/v8.0/";

  function _sendRequestSync(query, data, formatValue, method) {

    let responseOut = null;
    let req = new XMLHttpRequest();
    req.open(method, query, false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    if (formatValue)
      req.setRequestHeader("Prefer", "odata.include-annotations=*");

    req.onreadystatechange = function () {
      if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
          responseOut = JSON.parse(this.response);
        }
        else {
          alert(this.statusText);
        }
      }
    };
    if (data)
      req.send(JSON.stringify(data));
    else
      req.send();



    return responseOut;
  }

  function _sendRequest(query, data, formatValue, method, sync) {

    if (typeof (formatValue) == "undefined")
      formatValue = false;

    if (sync)
      return _sendRequestSync(query, data, formatValue, method);

    if (typeof ($) == "undefined") {
      alert("Для работы необходимо подлючить библиотеку JQuery!");
      return;
    }

    // вернет promise
    return $.ajax({
      async: true,
      type: method || "GET",
      url: _webApiUrl + query,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("OData-MaxVersion", "4.0");
        xhr.setRequestHeader("OData-Version", "4.0");
        if (formatValue)
          xhr.setRequestHeader("Prefer", "odata.include-annotations=*");
      },
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: data ? JSON.stringify(data) : null
    })
      .fail(function (response) {
        let def = new $.Deferred();
        def.reject(response.responseJSON ? response.responseJSON.error : response);
        return def;
      });
  }


  function _get(entitySetName, query, entityId, sync) {
    if (entityId) {
      return _sendRequest(entitySetName + "(" + entityId.replace(/[{}]/g, "") + ")?" + query, null, true, "GET", sync);
    }
    else
      return _sendRequest(entitySetName + "?" + query, null, true, "GET", sync);
  }

  function _fetch(entitySetName, fetchText, sync) {
    fetchText = escape(fetchText);

    let responseOut = null;
    let req = new XMLHttpRequest();
    req.open("GET", _webApiUrl + entitySetName + "?fetchXml=" + fetchText, false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=*");
    req.onreadystatechange = function () {
      if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
          console.log("0");
          responseOut = JSON.parse(this.response);
        }
        else {
          alert(this.statusText);
        }
      }
    };
    req.send();
    return responseOut;
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
})();