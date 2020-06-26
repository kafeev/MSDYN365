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
MSDYN365.WebApi = {};
MSDYN365.WebApi.entity = (function () {

  let _webApiUrl = (Xrm.Page.context.getClientUrl() || location.protocol + "//" + location.host) + "/api/data/v8.0/";

  function _sendRequestSync(query, data, formatValue, method) {

    let responseOut = null;
    let req = new XMLHttpRequest();
    req.open(method, _webApiUrl + query, false);
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
        if (this.status === 204 && method == "POST") {
          let uri = this.getResponseHeader("OData-EntityId");
          let regExp = /\(([^)]+)\)/;
          let matches = regExp.exec(uri);
          responseOut = matches[1];
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

  function _sendRequest(query, data, method, sync, formatValue) {

    if (typeof (formatValue) == "undefined")
      formatValue = false;

    if (sync)
      return _sendRequestSync(query, data, formatValue, method);

    if (typeof ($) == "undefined") {
      alert("Для работы необходимо подлючить библиотеку JQuery!");
      return;
    }

    // вернет promise

    //$.ajax({
    //  async: true,
    //  type: "POST",
    //  url: Xrm.Page.context.getClientUrl() + "/api/data/v8.0/accounts",
    //  contentType: "application/json; charset=utf-8",
    //  datatype: "json",
    //  data: JSON.stringify(data),
    //  beforeSend: function (XMLHttpRequest) {
    //    XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
    //    XMLHttpRequest.setRequestHeader("OData-Version", "4.0");
    //    XMLHttpRequest.setRequestHeader("Accept", "application/json");
    //  },
    //  error: function (xhr, textStatus, errorThrown) {
    //    alert(textStatus + " " + errorThrown);
    //    let def = new $.Deferred();
    //    def.reject(xhr.responseJSON ? xhr.responseJSON.error : xhr);
    //    return def;
    //  }
    //})
    //  .done(function (data, textStatus, xhr) {

    //    if (xhr.status == 200) {
    //      let def = new $.Deferred();
    //      def.resolve(JSON.parse(data));
    //      return def;
    //    }

    //    if (xhr.status === 204) {
    //      let def = new $.Deferred();
    //      let entityUrl = xhr.getResponseHeader("OData-EntityId");
    //      let entityId = /\((.+)\)/.exec(entityUrl)[1];
    //      def.resolve(entityId);
    //      return def.promise();
    //    }

    //  });

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
      query = entitySetName + "(" + entityId.replace(/[{}]/g, "") + ")?" + query;
    }

    return _sendRequest(query, null, "GET", sync);
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

  function _update(entitySetName, entity, entityId, sync) {
    let query = entitySetName + "(" + entityId.replace(/[{}]/g, "") + ")";
    return _sendRequest(query, entity, "PATCH", sync);
  }

  function _delete() {

  }

  function _create(entitySetName, entity, sync) {
    return _sendRequest(entitySetName, entity, "POST", sync);
  }

  function _executeAction() {

  }



  return {
    get: _get,
    put: _create,
    patch: _update,
    delete: _delete,

    fetch: _fetch,
    executeAction: _executeAction
  }
})();