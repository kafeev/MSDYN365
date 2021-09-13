using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSDYN365.CommonHelper
{
  public class PluginHelper
  {
    public Entity Target = null;
    public Entity PreEntity = null;
    public Entity PostEntity = null;
    public readonly IPluginExecutionContext _context = null;
    public readonly IOrganizationService _service;


    public PluginHelper(IOrganizationService service, Entity target, Entity preEntity = null, Entity postEntity = null)
    {
      _service = service;
      Target = target;
      PreEntity = preEntity;
      PostEntity = postEntity;
    }

    public PluginHelper(IOrganizationService service, IPluginExecutionContext context)
    {
      _context = context;
      _service = service;
      Target = (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity) ? (Entity)context.InputParameters["Target"] : null;
      PreEntity = (context.PreEntityImages != null && context.PreEntityImages.Contains("PreImage")) ? context.PreEntityImages["PreImage"] : null;
      PostEntity = (context.PostEntityImages != null && context.PostEntityImages.Contains("PostImage")) ? context.PostEntityImages["PostImage"] : null;
    }



    public bool IsValueChanged(string attributeName)
    {
      if (!Target.Contains(attributeName))
        return false;

      var newValue = Target[attributeName];
      var oldValue = PreEntity == null ? null : !PreEntity.Contains(attributeName) ? null : PreEntity[attributeName];


      if (oldValue == null && newValue == null)
        return false;

      if (oldValue != null && newValue == null)
        return true;

      else if (oldValue == null && newValue != null)
        return true;

      var typeName = newValue == null ? oldValue.GetType().Name.ToLower() : newValue.GetType().Name.ToLower();

      switch (typeName)
      {
        case "entityreference":
          return ((EntityReference)oldValue).Id != ((EntityReference)newValue).Id;
        case "optionsetvalue":
          return ((OptionSetValue)oldValue).Value != ((OptionSetValue)newValue).Value;
        case "money":
          return ((Money)oldValue).Value != ((Money)newValue).Value;
        case "decimal":
          return (decimal)oldValue != (decimal)newValue;
        case "double":
          return (double)oldValue != (double)newValue;
        case "datetime":
          return (DateTime)oldValue != (DateTime)newValue;
        case "int32":
        case "int":
          return (int)oldValue != (int)newValue;
        case "string":
          return (string)oldValue != (string)newValue;
        case "bool":
          return (bool)oldValue != (bool)newValue;
        default:
          return oldValue != newValue;
      }
    }

    public bool ValueChanged(string attrName)
    {
      var changed = false;
      if (Target.Contains(attrName))
      {
        object oldValue = (PreEntity != null && PreEntity.Contains(attrName)) ? PreEntity[attrName] : null;
        object newValue = Target[attrName];

        changed = ValueChanged(oldValue, newValue);
      }

      return changed;
    }

    public bool ValueChanged(object oldValue, object newValue)
    {
      var changed = false;

      if (oldValue == null && newValue == null)
        changed = false;
      else if (oldValue != null && newValue == null)
        changed = true;
      else if (oldValue == null && newValue != null)
        changed = true;
      else
      {
        string attrType = (oldValue != null) ? oldValue.GetType().Name : (newValue != null) ? newValue.GetType().Name : String.Empty;
        switch (attrType.ToLower())
        {
          case "entityreference":
            changed = (((EntityReference)oldValue).Id != ((EntityReference)newValue).Id);
            break;
          case "optionsetvalue":
            changed = (((OptionSetValue)oldValue).Value != ((OptionSetValue)newValue).Value);
            break;
          case "money":
            changed = (((Money)oldValue).Value != ((Money)newValue).Value);
            break;
          case "decimal":
            changed = ((decimal)oldValue != (decimal)newValue);
            break;
          case "double":
            changed = ((double)oldValue != (double)newValue);
            break;
          case "datetime":
            changed = ((DateTime)oldValue != (DateTime)newValue);
            break;
          case "int32":
          case "int":
            changed = ((int)oldValue != (int)newValue);
            break;
          case "string":
            changed = ((string)oldValue != (string)newValue);
            break;
          case "bool":
            changed = ((bool)oldValue != (bool)newValue);
            break;
          default:
            changed = (oldValue != newValue);
            break;
        }
      }

      return changed;
    }

    public T GetAttributeValue<T>(string attributeName, object defaultValue = null)
    {
      if (Target.Contains(attributeName))
        return Target.GetAttributeValue<T>(attributeName);

      if (PreEntity.Contains(attributeName))
        return PreEntity.GetAttributeValue<T>(attributeName);

      return defaultValue == null ? default : (T)defaultValue;
    }
  }
}
