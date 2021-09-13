using System;
using System.IO;
using System.Threading;
using System.Xml;
using System.Xml.Linq;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;

namespace MSDYN365.DaDataProxy.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
        }

        //public void Run(ServerConnection.Configuration serverConfig, string solutionPath)
        //{
        //    try
        //    {
        //        using (OrganizationServiceProxy _serviceProxy = new OrganizationServiceProxy(serverConfig.OrganizationUri, serverConfig.HomeRealmUri, serverConfig.Credentials, serverConfig.DeviceCredentials))
        //        {
        //            byte[] data = File.ReadAllBytes(solutionPath);
        //            Guid importId = Guid.NewGuid();

        //            Console.WriteLine("\n Importing solution {0} into Server {1}.", solutionPath, serverConfig.OrganizationUri);

        //            _serviceProxy.EnableProxyTypes();
        //            ImportSolutionRequest importSolutionRequest = new ImportSolutionRequest()
        //            {
        //                CustomizationFile = data,
        //                ImportJobId = importId
        //            };

        //            ThreadStart starter = () => ProgressReport(serverConfig, importId);
        //            Thread t = new Thread(starter);
        //            t.Start();

        //            _serviceProxy.Execute(importSolutionRequest);
        //            Console.Write("Solution {0} successfully imported into {1}", solutionPath, serverConfig.OrganizationUri);
        //        }
        //    }
        //    catch (Exception ex)
        //    {

        //    }
        //}
    }
}
