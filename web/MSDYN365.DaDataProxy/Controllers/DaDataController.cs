using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MSDYN365.DaDataProxy.Controllers
{
  public class DaDataController : ApiController
  {
    public DaDataController()
    {

    }

    [Route("TestService")]
    [HttpGet]
    public HttpResponseMessage TestService(string inputStr)
    {
      return new HttpResponseMessage { StatusCode = HttpStatusCode.OK, Content = new StringContent($"You entered: {inputStr}") };
    }
  }
}
