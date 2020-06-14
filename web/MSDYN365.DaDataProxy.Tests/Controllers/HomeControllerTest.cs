using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MSDYN365.DaDataProxy;
using MSDYN365.DaDataProxy.Controllers;

namespace MSDYN365.DaDataProxy.Tests.Controllers
{
  [TestClass]
  public class HomeControllerTest
  {
    [TestMethod]
    public void Index()
    {
      // Arrange
      DaDataController controller = new DaDataController();

      // Act
      ViewResult result = controller.Index() as ViewResult;

      // Assert
      Assert.IsNotNull(result);
      Assert.AreEqual("Home Page", result.ViewBag.Title);
    }
  }
}
