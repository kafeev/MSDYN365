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
