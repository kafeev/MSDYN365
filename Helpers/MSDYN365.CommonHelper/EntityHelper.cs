using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSDYN365.CommonHelper
{
  public static class EntityHelper
  {
    /// <summary>
    /// fields which can't copy 
    /// </summary>
    public static List<string> ExcludedFields = new List<string>()
    {
      "actualclosedate",
      "captureproposalfeedback",
      "completefinalproposal",
      "completeinternalreview",
      "confirminterest",
      "createdby",
      "createdby_createdbyyominame",
      "createdon",
      "decisionmaker",
      "developproposal",
      "estimatedclosedate",
      "evaluatefit",
      "exchangerate",
      "filedebrief",
      "identifycompetitors",
      "identifycustomercontacts",
      "identifypursuitteam",
      "isrevenuesystemcalculated",
      "modifiedby",
      "modifiedby_modifiedbyyominame",
      "modifiedon",
      "opportunityid",
      "ownerid",
      "ownerid_owneridyominame",
      "owningbusinessunit",
      "owninguser",
      "participatesinworkflow",
      "presentfinalproposal",
      "presentproposal",
      "pricingerrorcode",
      "processid",
      "pursuitdecision",
      "resolvefeedback",
      "sendthankyounote",
      "skippricecalculation",
      "stageid",
      "statecode",
      "statuscode",
      "stepname",
      "timezoneruleversionnumber",
      "transactioncurrencyid",
      "traversedpath"
      };

    /// <summary>
    /// create link link to entityrecord
    /// </summary>
    /// <param name="crmUrlWithPortAndOrgName"></param>
    /// <param name="entity"></param>
    /// <returns></returns>
    public static Uri CreateLinkForEntity(string crmUrlWithPortAndOrgName, EntityReference entity)
    {
      return new Uri($"{crmUrlWithPortAndOrgName}/main.aspx?etn={entity.LogicalName}&pagetype=entityrecord&id=%7B{entity.Id}%7D&rof=false&extraqs=?", UriKind.Absolute);
    }

    /// <summary>
    /// create link link to entityrecord
    /// </summary>
    /// <param name="crmUrlWithPortAndOrgName"></param>
    /// <param name="entityLogicalName"></param>
    /// <param name="entityId"></param>
    /// <returns></returns>
    public static Uri CreateLinkForEntity(string crmUrlWithPortAndOrgName, string entityLogicalName, string entityId)
    {
      return new Uri($"{crmUrlWithPortAndOrgName}/main.aspx?etn={entityLogicalName}&pagetype=entityrecord&id=%7B{entityId}%7D&rof=false&extraqs=?", UriKind.Absolute);
    }

    /// <summary>
    /// create html tag <a href=''>
    /// </summary>
    /// <param name="crmUrlWithPortAndOrgName"></param>
    /// <param name="entity"></param>
    /// <param name="linkName"></param>
    /// <returns></returns>
    public static string CreateHtmlATag(string crmUrlWithPortAndOrgName, EntityReference entity, string linkName = null)
    {
      var link = new Uri($"{crmUrlWithPortAndOrgName}/main.aspx?etn={entity.LogicalName}&pagetype=entityrecord&id=%7B{entity.Id}%7D&rof=false&extraqs=?", UriKind.Absolute);
      return $"<a href='{link}' >{linkName ?? link.ToString()}</a>";
    }

    /// <summary>
    /// create html tag <a href='' >
    /// </summary>
    /// <param name="crmUrlWithPortAndOrgName"></param>
    /// <param name="entityLogicalName"></param>
    /// <param name="entityId"></param>
    /// <param name="linkName"></param>
    /// <returns></returns>
    public static string CreateHtmlATag(string crmUrlWithPortAndOrgName, string entityLogicalName, string entityId, string linkName)
    {
      var link = new Uri($"{crmUrlWithPortAndOrgName}/main.aspx?etn={entityLogicalName}&pagetype=entityrecord&id=%7B{entityId}%7D&rof=false&extraqs=?", UriKind.Absolute);
      return $"<a href='{link}' >{linkName ?? link.ToString()}</a>";
    }

    /// <summary>
    /// copy attribute value if fromEntity.Contains(attributeName)
    /// </summary>
    /// <param name="from"></param>
    /// <param name="to"></param>
    /// <param name="attributeName"></param>
    public static void CopyAttributeValueTry(Entity from, Entity to, string attributeName)
    {
      if (from.Contains(attributeName))
        to[attributeName] = from[attributeName];
    }

    /// <summary>
    /// copy attribute value, if !fromEntity.Contains(attributeName), then to[attributeName] = null
    /// </summary>
    /// <param name="from"></param>
    /// <param name="to"></param>
    /// <param name="attributeName"></param>
    public static void CopyAttributeValue(Entity from, Entity to, string attributeName)
    {
      to[attributeName] = from.Contains(attributeName) ? from[attributeName] : null;
    }

    /// <summary>
    /// create new Record and copy fields value, exclude system fileds
    /// </summary>
    /// <param name="source"></param>
    /// <returns></returns>
    public static Entity CloneRecord(Entity source)
    {
      var newRecord = new Entity(source.LogicalName);

      foreach (var fieldName in source.Attributes)
      {
        if (!ExcludedFields.Any(a => a.Equals(fieldName.Key, StringComparison.CurrentCultureIgnoreCase)))
          newRecord[fieldName.Key] = source[fieldName.Key];
      }

      return newRecord;
    }

    /// <summary>
    /// create new Record and copy fields value, exclude system fileds and fields with null-value
    /// </summary>
    /// <param name="source"></param>
    /// <returns></returns>
    public static Entity CloneRecordTry(Entity source)
    {
      var newRecord = new Entity(source.LogicalName);

      foreach (var fieldName in source.Attributes.Keys.ToList())
      {
        if (source[fieldName] != null &&
          !ExcludedFields.Any(a => a.Equals(fieldName, StringComparison.CurrentCultureIgnoreCase)))
          newRecord[fieldName] = source[fieldName];
      }

      newRecord.Attributes.Remove($"{source.LogicalName}id");

      return newRecord;
    }
  }
}
