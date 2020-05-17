using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSDYN365.CommonHelper
{
  public static class ServiceHelper
  {

    #region Main Methods
    public static List<ExecuteMultipleResponseItem> BulkExecute<T>(this IOrganizationService service, List<T> requests, Boolean continueOnError, Boolean returnResponses) where T : OrganizationRequest
    {
      if ((requests?.Count ?? 0) == 0)
        return new List<ExecuteMultipleResponseItem>();


      var multipleRequest = new ExecuteMultipleRequest()
      {
        Settings = new ExecuteMultipleSettings()
        {
          ContinueOnError = continueOnError,
          ReturnResponses = returnResponses
        },
        Requests = new OrganizationRequestCollection()
      };

      multipleRequest.Requests.AddRange(requests);

      return service.ExecuteMultiple(multipleRequest);
    }

    public static ExecuteTransactionResponse BulkExecuteTransaction<T>(this IOrganizationService service, List<T> requests, Boolean returnResponses) where T : OrganizationRequest
    {
      if (requests == null || requests.Count == 0)
      {
        return new ExecuteTransactionResponse();
      }

      var multipleRequest = new ExecuteTransactionRequest()
      {
        Requests = new OrganizationRequestCollection(),
        ReturnResponses = returnResponses,
      };

      multipleRequest.Requests.AddRange(requests);

      return (ExecuteTransactionResponse)service.Execute(multipleRequest);
    }

    private static List<ExecuteMultipleResponseItem> ExecuteMultiple(this IOrganizationService service, ExecuteMultipleRequest multipleRequest)
    {
      var separatedRequests = new List<ExecuteMultipleRequest>();
      var pageNumber = 0;
      var requestsPaged = new List<OrganizationRequest>();
      do
      {
        //5000 - maximum records for processing 
        requestsPaged = multipleRequest.Requests.Skip(5000 * pageNumber).Take(5000).ToList();
        var separatedRequest = new ExecuteMultipleRequest()
        {
          Settings = new ExecuteMultipleSettings()
          {
            ContinueOnError = multipleRequest.Settings.ContinueOnError,
            ReturnResponses = multipleRequest.Settings.ReturnResponses
          },
          Requests = new OrganizationRequestCollection()
        };

        separatedRequest.Requests.AddRange(requestsPaged);
        separatedRequests.Add(separatedRequest);
        pageNumber++;
      }
      while (requestsPaged.Count > 0);

      var responses = new List<ExecuteMultipleResponseItem>();
      separatedRequests.ForEach(separatedRequest =>
      {
        var separatedResponse = (ExecuteMultipleResponse)service.Execute(separatedRequest);
        responses.AddRange(separatedResponse.Responses);
      });
      return responses;
    }


    #endregion

    #region Without Transaction
    public static List<ExecuteMultipleResponseItem> BulkCreate(this IOrganizationService service, List<Entity> entities, Boolean continueOnError, Boolean returnResponses)
    {
      var requests = entities.Select(e => new CreateRequest { Target = e }).ToList();

      return service.BulkExecute(requests, continueOnError, returnResponses);
    }

    public static List<ExecuteMultipleResponseItem> BulkUpdate(this IOrganizationService service, List<Entity> entities, Boolean continueOnError, Boolean returnResponses)
    {
      var requests = entities.Select(e => new UpdateRequest { Target = e }).ToList();

      return service.BulkExecute(requests, continueOnError, returnResponses);
    }

    public static List<ExecuteMultipleResponseItem> BulkDelete(this IOrganizationService service, List<EntityReference> entities, Boolean continueOnError, Boolean returnResponses)
    {
      var requests = entities.Select(e => new DeleteRequest { Target = e }).ToList();

      return service.BulkExecute(requests, continueOnError, returnResponses);
    }

    public static List<ExecuteMultipleResponseItem> BulkUsert(this IOrganizationService service, List<Entity> entities, Boolean continueOnError, Boolean returnResponses)
    {
      var requests = entities.Select(e => new UpsertRequest { Target = e }).ToList();

      return service.BulkExecute(requests, continueOnError, returnResponses);
    } 
    #endregion

    #region In Transaction

    public static ExecuteTransactionResponse BulkCreateTransaction(this IOrganizationService service, List<Entity> entities, Boolean continueOnError, Boolean returnResponses)
    {
      var requests = entities.Select(e => new CreateRequest { Target = e }).ToList();

      return service.BulkExecuteTransaction(requests, returnResponses);
    }

    public static ExecuteTransactionResponse BulkUpdateTransaction(this IOrganizationService service, List<Entity> entities, Boolean continueOnError, Boolean returnResponses)
    {
      var requests = entities.Select(e => new UpdateRequest { Target = e }).ToList();

      return service.BulkExecuteTransaction(requests, returnResponses);
    }

    public static ExecuteTransactionResponse BulkDeleteTransaction(this IOrganizationService service, List<EntityReference> entities, Boolean continueOnError, Boolean returnResponses)
    {
      var requests = entities.Select(e => new DeleteRequest { Target = e }).ToList();

      return service.BulkExecuteTransaction(requests, returnResponses);
    }

    public static ExecuteTransactionResponse BulkUsertTransaction(this IOrganizationService service, List<Entity> entities, Boolean continueOnError, Boolean returnResponses)
    {
      var requests = entities.Select(e => new UpsertRequest { Target = e }).ToList();

      return service.BulkExecuteTransaction(requests, returnResponses);
    }

    #endregion
  }
}
