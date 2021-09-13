using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace MSDYN365.CommonHelper
{
  public static class ServiceHelper
  {
    /// <summary>
    /// update selected attributes only
    /// </summary>
    /// <param name="service"></param>
    /// <param name="entity"></param>
    /// <param name="columns"></param>
    public static void Update(this IOrganizationService service, Entity entity, params string[] columns)
    {
      if (columns.Length == 0)
        service.Update(entity);
      else
      {
        var entityToUpdate = new Entity(entity.LogicalName);
        entityToUpdate.Id = entity.Id;
        foreach (var column in columns)
          if (entity.Contains(column))
            entityToUpdate[column] = entity[column];
        service.Update(entityToUpdate);
      }
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="service"></param>
    /// <param name="entity"></param>
    /// <param name="onlyChanged"></param>
    public static void Update(this IOrganizationService service, Entity entity, bool onlyChanged)
    {
      if (!onlyChanged)
        service.Update(entity);
      else
      {
        var oldEntity = service.GetEntityByRef(entity.ToEntityReference(), entity.Attributes.Select(attr => attr.Key).ToArray());
        var pluginHelper = new PluginHelper(service, entity, oldEntity, entity);
        var entityToUpdate = new Entity(entity.LogicalName);
        entityToUpdate.Id = entity.Id;
        var hasChangedAttrs = false;
        foreach (var attr in entity.Attributes)
          if (pluginHelper.ValueChanged(attr.Key))
          {
            entityToUpdate[attr.Key] = attr.Value;
            hasChangedAttrs = true;
          }
        if (hasChangedAttrs)
          service.Update(entityToUpdate);
      }
    }

    /// <summary>
    /// Обновляет только измененные атрибуты сущности
    /// </summary>
    /// <param name="service">CrmService</param>
    /// <param name="entityRef">Ссылка на сущность</param>
    /// <param name="attrName">Имя поля</param>
    /// <param name="attrValue">Значение поля</param>
    public static void Update(this IOrganizationService service, EntityReference entityRef, string attrName, object attrValue)
    {
      var entity = new Entity(entityRef.LogicalName);
      entity.Id = entityRef.Id;
      entity[attrName] = attrValue;
      service.Update(entity, false);
    }

    /// <summary>
    /// Переназначает запись
    /// </summary>
    /// <param name="service">CrmService</param>
    /// <param name="ownerRef">На кого назначить</param>
    /// <param name="target"> Что назначить</param>
    public static void AssignRecord(this IOrganizationService service, EntityReference ownerRef, EntityReference target)
    {
      var assignReq = new AssignRequest()
      {
        Assignee = ownerRef,
        Target = target
      };
      service.Execute(assignReq);
    }

    /// <summary>
    /// Меняет состояние и статус сущности
    /// </summary>
    /// <param name="entityReference">Сущность</param>
    /// <param name="state">Состояние</param>
    /// <param name="status">Статус</param>
    public static void ChangeState(this IOrganizationService service, EntityReference entityReference, int state, int status)
    {
      SetStateRequest req = new SetStateRequest();
      //the entity you want to change the state of
      req.EntityMoniker = entityReference;
      //what should the new state be
      req.State = new OptionSetValue(state);
      //Pick an option from the status reason picklist to specify reason for state change
      req.Status = new OptionSetValue(status);
      service.Execute(req);
    }

    #region Retrieve
    /// <summary>
    /// Закрывает обращение
    /// </summary>
    /// <param name="incidentRef">Ссылка на обращение</param>
    /// <param name="status">Статус</param>
    public static void CloseIncident(this IOrganizationService service, EntityReference incidentRef, int status, string subject)
    {
      var req = new CloseIncidentRequest()
      {
        IncidentResolution = new Entity("incidentresolution")
        {
          ["subject"] = subject,
          ["incidentid"] = incidentRef
        },
        Status = new OptionSetValue(status)
      };

      service.Execute(req);
    }

    /// <summary>
    /// Возвращает сущность по ссылке
    /// </summary>
    /// <param name="entityRef">Ссылка на сущность</param>
    /// <param name="columns">Набор возвращаемых полей</param>
    /// <returns></returns>
    public static Entity GetEntityByRef(this IOrganizationService service, EntityReference entityRef, ColumnSet columns)
    {
      if (entityRef == null)
        return null;
      return service.Retrieve(entityRef.LogicalName, entityRef.Id, columns);
    }

    /// <summary>
    /// Возвращает сущность по ссылке
    /// </summary>
    /// <param name="entityRef">Ссылка на сущность</param>
    /// <param name="columns">Набор возвращаемых полей</param>
    /// <returns></returns>
    public static Entity GetEntityByRef(this IOrganizationService service, EntityReference entityRef, params string[] columns)
    {
      if (entityRef == null)
        return null;
      return service.Retrieve(entityRef.LogicalName, entityRef.Id, new ColumnSet(columns));
    }

    /// <summary>
    /// Возвращает сущности по атрибуту
    /// </summary>
    /// <param name="entityName">Тип сущности</param>
    /// <param name="attrName">Атрибут для фильтрации</param>
    /// <param name="attrValue">Значение атрибута</param>
    /// <param name="columns">Набор полей</param>
    /// <param name="onlyFirst">Только одну запись</param>
    /// <returns>Найденые сущности</returns>
    public static List<Entity> GetEntitiesByAttr(this IOrganizationService service, string entityName, string attrName, object attrValue, ColumnSet columns, bool onlyFirst = false)
    {
      //TODO Добавить возможность фильтрации только по активным
      var query = new QueryExpression()
      {
        EntityName = entityName,
        ColumnSet = columns,
        Criteria = new FilterExpression()
        {
          Conditions =
                    {
                        new ConditionExpression(attrName, ConditionOperator.Equal, attrValue)
                    }
        },
        NoLock = true
      };
      if (onlyFirst)
        query.PageInfo = new PagingInfo()
        {
          Count = 1,
          PageNumber = 1
        };
      return service.RetrieveMultipleAll(query);
    }

    /// <summary>
    /// Возвращает сущности по атрибуту
    /// </summary>
    /// <param name="entityName">Тип сущности</param>
    /// <param name="attrName">Атрибут для фильтрации</param>
    /// <param name="attrValue">Значение атрибута</param>
    /// <param name="columns">Набор полей</param>
    /// <returns>Найденые сущности</returns>
    public static List<Entity> GetEntitiesByAttr(this IOrganizationService service, string entityName, string attrName, object attrValue, params string[] columns)
    {
      return service.GetEntitiesByAttr(entityName, attrName, attrValue, new ColumnSet(columns));
    }

    /// <summary>
    /// Возвращает сущности по атрибуту
    /// </summary>
    /// <param name="entityName">Тип сущности</param>
    /// <param name="attrName">Атрибут для фильтрации</param>
    /// <param name="attrValue">Значение атрибута</param>
    /// <param name="allColumns">Все колонки</param>
    /// <returns>Найденые сущности</returns>
    public static List<Entity> GetEntitiesByAttr(this IOrganizationService service, string entityName, string attrName, object attrValue, bool allColumns)
    {
      return service.GetEntitiesByAttr(entityName, attrName, attrValue, new ColumnSet(allColumns));
    }

    /// <summary>
    /// Возвращает сущность по атрибуту
    /// </summary>
    /// <param name="entityName">Тип сущности</param>
    /// <param name="attrName">Атрибут для фильтрации</param>
    /// <param name="attrValue">Значение атрибута</param>
    /// <param name="columns">Набор полей</param>
    /// <returns>Найденая сущность</returns>
    public static Entity GetEntityByAttr(this IOrganizationService service, string entityName, string attrName, object attrValue, params string[] columns)
    {
      return service.GetEntitiesByAttr(entityName, attrName, attrValue, new ColumnSet(columns), true).FirstOrDefault();
    }

    /// <summary>
    /// Возвращает сущность по атрибуту
    /// </summary>
    /// <param name="entityName">Тип сущности</param>
    /// <param name="attrName">Атрибут для фильтрации</param>
    /// <param name="attrValue">Значение атрибута</param>
    /// <param name="columns">Набор полей</param>
    /// <returns>Найденая сущность</returns>
    public static Entity GetEntityByAttr(this IOrganizationService service, string entityName, string attrName, object attrValue, bool allColumns)
    {
      return service.GetEntitiesByAttr(entityName, attrName, attrValue, new ColumnSet(allColumns), true).FirstOrDefault();
    }

    /// <summary>
    /// Возвращает набор сущностей по условным выражениям
    /// </summary>
    /// <param name="service"></param>
    /// <param name="entityName"></param>
    /// <param name="columns"></param>
    /// <param name="conditions"></param>
    /// <returns></returns>
    public static List<Entity> GetEntitiesByConditions(this IOrganizationService service, string entityName, string[] columns, params ConditionExpression[] conditions)
    {
      var query = new QueryExpression()
      {
        EntityName = entityName,
        ColumnSet = new ColumnSet(columns),
        Criteria = new FilterExpression()
        {
        },
        NoLock = true
      };
      conditions.ToList().ForEach(c => query.Criteria.AddCondition(c));
      return service.RetrieveMultipleAll(query);
    }

    /// <summary>
    /// Возвращает набор сущностей по условным выражениям
    /// </summary>
    /// <param name="service"></param>
    /// <param name="entityName"></param>
    /// <param name="allColumns"></param>
    /// <param name="conditions"></param>
    /// <returns></returns>
    public static List<Entity> GetEntitiesByConditions(this IOrganizationService service, string entityName, bool allColumns, params ConditionExpression[] conditions)
    {
      var query = new QueryExpression()
      {
        EntityName = entityName,
        ColumnSet = new ColumnSet(allColumns),
        Criteria = new FilterExpression()
        {
        },
        NoLock = true
      };
      conditions.ToList().ForEach(c => query.Criteria.AddCondition(c));
      return service.RetrieveMultipleAll(query);
    }

    /// <summary>
    /// Возвращает набор сущностей по условным выражениям
    /// </summary>
    /// <param name="service"></param>
    /// <param name="entityName"></param>
    /// <param name="allColumns"></param>
    /// <param name="count"></param>
    /// <param name="conditions"></param>
    /// <returns></returns>
    public static List<Entity> GetEntitiesByConditions(this IOrganizationService service, string entityName, bool allColumns, int count, params ConditionExpression[] conditions)
    {
      var query = new QueryExpression()
      {
        EntityName = entityName,
        ColumnSet = new ColumnSet(allColumns),
        Criteria = new FilterExpression()
        {
        },
        NoLock = true,
        PageInfo = new PagingInfo()
        {
          PageNumber = 1,
          Count = count
        }
      };
      conditions.ToList().ForEach(c => query.Criteria.AddCondition(c));
      return service.RetrieveMultipleAll(query);
    }

    /// <summary>
    /// Возвращает все записи, даже если их более 5к
    /// </summary>
    /// <param name="query">Запрос</param>
    /// <returns></returns>
    public static List<Entity> RetrieveMultipleAll(this IOrganizationService service, QueryExpression query)
    {
      List<Entity> entities = new List<Entity>();
      query.PageInfo = new PagingInfo()
      {
        Count = 5000,
        PageNumber = 1
      };
      EntityCollection response = null;
      do
      {
        response = service.RetrieveMultiple(query);
        entities.AddRange(response.Entities);
        query.PageInfo.PageNumber++;
        query.PageInfo.PagingCookie = response.PagingCookie;
      }
      while (response.MoreRecords);
      return entities;
    }
    #endregion

    #region Fetch
    /// <summary>
    /// Вытягивает данные на основе Fetch запроса. По дефолту 5к вроде
    /// </summary>
    /// <param name="fetchXml">Fetch запрос</param>
    /// <returns></returns>
    public static EntityCollection Fetch(this IOrganizationService service, string fetchXml)
    {
      return service.RetrieveMultiple(new FetchExpression(fetchXml));
    }

    /// <summary>
    /// Вытягивает все данные на основе Fetch запроса
    /// </summary>
    /// <param name="fetchXml">Fetch запрос</param>
    /// <returns></returns>
    public static List<Entity> FetchAll(this IOrganizationService service, string fetchXml)
    {
      var result = new List<Entity>();

      var fetchCount = 5000;
      var pageNumber = 1;
      string pagingCookie = null;
      while (true)
      {
        var fetchXmlWithPaging = GetFetchXmlWithPaging(fetchXml, pagingCookie, pageNumber, fetchCount);
        var response = service.RetrieveMultiple(new FetchExpression(fetchXmlWithPaging));

        if (response.Entities.Count > 0)
          result.AddRange(response.Entities);

        if (response.MoreRecords)
        {
          pageNumber++;
          pagingCookie = response.PagingCookie;
        }
        else
          break;
      }

      return result;
    }

    /// <summary>
    /// Добавляет постраничную навигацию в fetch
    /// </summary>
    /// <param name="fetchXml"></param>
    /// <param name="cookie"></param>
    /// <param name="page"></param>
    /// <param name="count"></param>
    /// <returns></returns>
    public static string GetFetchXmlWithPaging(string fetchXml, string cookie, int page, int count)
    {
      var stringReader = new StringReader(fetchXml);
      var reader = new XmlTextReader(stringReader);

      // Load document
      var doc = new XmlDocument();
      doc.Load(reader);

      return GetFetchXmlWithPaging(doc, cookie, page, count);
    }

    /// <summary>
    /// Добавляет постраничную навигацию в fetch
    /// </summary>
    /// <param name="fetchXml"></param>
    /// <param name="cookie"></param>
    /// <param name="page"></param>
    /// <param name="count"></param>
    /// <returns></returns>
    private static string GetFetchXmlWithPaging(XmlDocument doc, string cookie, int page, int count)
    {
      var attrs = doc.DocumentElement.Attributes;

      if (cookie != null)
      {
        var pagingAttr = doc.CreateAttribute("paging-cookie");
        pagingAttr.Value = cookie;
        attrs.Append(pagingAttr);
      }

      var pageAttr = doc.CreateAttribute("page");
      pageAttr.Value = Convert.ToString(page);
      attrs.Append(pageAttr);

      var countAttr = doc.CreateAttribute("count");
      countAttr.Value = Convert.ToString(count);
      attrs.Append(countAttr);

      var sb = new StringBuilder(1024);
      var stringWriter = new StringWriter(sb);

      var writer = new XmlTextWriter(stringWriter);
      doc.WriteTo(writer);
      writer.Close();

      return sb.ToString();
    }
    #endregion

    #region Association
    /// <summary>
    /// Создает связь N-N между записями
    /// </summary>
    /// <param name="entityRef">Основная запись</param>
    /// <param name="relatedEntityRef">Связываемые записи</param>
    /// <param name="relationshipName">Название связи</param>
    public static void Associate(this IOrganizationService service, EntityReference entityRef, EntityReference relatedEntityRef, string relationshipName)
    {
      var queryAssociations = new QueryExpression()
      {
        EntityName = relationshipName,
        ColumnSet = new ColumnSet(),
        Criteria = new FilterExpression()
        {
          Conditions =
                    {
                        new ConditionExpression($"{entityRef.LogicalName}id", ConditionOperator.Equal, entityRef.Id),
                        new ConditionExpression($"{relatedEntityRef.LogicalName}id", ConditionOperator.Equal, relatedEntityRef.Id)
                    }
        }
      };
      var associations = service.RetrieveMultiple(queryAssociations).Entities;
      if (associations.Count == 0)
        service.Associate(entityRef.LogicalName, entityRef.Id, new Relationship(relationshipName), new EntityReferenceCollection(new List<EntityReference> { relatedEntityRef }));
    }

    /// <summary>
    /// Удаляет связь N-N между записями
    /// </summary>
    /// <param name="entityRef">Основная запись</param>
    /// <param name="relatedEntityRef">Связанная запись</param>
    /// <param name="relationshipName">Название связи</param>
    public static void Disassociate(this IOrganizationService service, EntityReference entityRef, EntityReference relatedEntityRef, string relationshipName)
    {
      var queryAssociations = new QueryExpression()
      {
        EntityName = relationshipName,
        ColumnSet = new ColumnSet(),
        Criteria = new FilterExpression()
        {
          Conditions =
                    {
                        new ConditionExpression($"{entityRef.LogicalName}id", ConditionOperator.Equal, entityRef.Id),
                        new ConditionExpression($"{relatedEntityRef.LogicalName}id", ConditionOperator.Equal, relatedEntityRef.Id)
                    }
        }
      };
      var associations = service.RetrieveMultiple(queryAssociations).Entities;
      if (associations.Count > 0)
        service.Disassociate(entityRef.LogicalName, entityRef.Id, new Relationship(relationshipName), new EntityReferenceCollection(new List<EntityReference> { relatedEntityRef }));
    }

    /// <summary>
    /// Удаляет связь N-N между основной записью и всеми связанными
    /// </summary>
    /// <param name="entityRef">Основная запись</param>
    /// <param name="relationshipName">Название связи</param>
    /// <param name="relatedEntityName">Тип связанной записи</param>
    public static void DisassociateAll(this IOrganizationService service, EntityReference entityRef, string relationshipName, string relatedEntityName)
    {
      var relationships = service.GetEntitiesByAttr(relationshipName, $"{entityRef.LogicalName}id", entityRef.Id, $"{relatedEntityName}id");
      if (relationships.Count > 0)
      {
        var collection = new EntityReferenceCollection(
            relationships
                .Select(rs => new EntityReference(relatedEntityName, rs.GetAttributeValue<Guid>($"{relatedEntityName}id")))
                .ToList());
        service.Disassociate(entityRef.LogicalName, entityRef.Id, new Relationship(relationshipName), collection);
      }
    }
    #endregion
  }
}
