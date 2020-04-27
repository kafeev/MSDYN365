using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;
using NLog;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.ServiceModel.Description;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace TaskSchedulerAppTeamplate
{
  class Program
  {
    const string LOG_TITLE_NAME = "Log Title";
    static IOrganizationService _service;

    public static Logger _log = LogManager.GetCurrentClassLogger();
    static void Main(string[] args)
    {
      var logTarget = ConfigurationManager.AppSettings.Get("logTarget");

      _log.Info("");
      _log.Info("Начало работы");

      var days4saveFiles = ConfigurationManager.AppSettings.Get("days4saveFiles");
      if (days4saveFiles == "")
        days4saveFiles = "5";

      _log.Info($"Очистка файлов логов за последние {days4saveFiles} дней");

      //ClearLogFiles(Convert.ToInt32(days4saveFiles));

      var crmOrgServiceUrl = ConfigurationManager.AppSettings.Get("crmOrgServiceUrl");
      var crmOrgUrl = ConfigurationManager.AppSettings.Get("crmOrgUrl");


      _service = GetService(crmOrgServiceUrl);

      var configSection = new XmlDocument();
      configSection.Load(AppDomain.CurrentDomain.SetupInformation.ConfigurationFile);

      XmlElement configNone = configSection.SelectSingleNode("/configuration/fetchAccount") as XmlElement;
      var fetch = configNone.InnerXml ?? "";

      if (string.IsNullOrEmpty(fetch))
      {
        _log.Error("Не найдена секция fetchAccount");
        return;
      }


      // получить записи для обработки
      var allAccounts = _service.RetrieveMultiple(new FetchExpression(fetch))?.Entities?.ToList() ?? new List<Entity>();



      _log.Info("Stop");
    }

    /// <summary>
    /// очищает старые файлы логов
    /// </summary>
    /// <param name="dayCount"></param>
    static void ClearLogFiles(int dayCount)
    {
      var dateBorder = DateTime.Now.AddDays(-dayCount);
      var dir = ConfigurationManager.AppSettings.Get("logPath");
      _log.Info(LOG_TITLE_NAME, "dir: " + dir);
      var allFiles = Directory.GetFiles(dir);
      if (allFiles.Length == 0)
        return;

      foreach (var fileName in allFiles)
      {
        var file = new FileInfo(fileName);
        if (file.CreationTime < dateBorder)
        {
          _log.Info(LOG_TITLE_NAME, "Удаляем файл: " + file.Name);
          Trace.WriteLine(file.Name);
          file.Delete();
        }
      }
    }

    static IOrganizationService GetService(string crmOrgServiceUrl)
    {
      var credentials = new ClientCredentials();

      // для примера - получения сервиса от конкретной учетной записи
      var user = ConfigurationManager.AppSettings.Get("userLogin");
      var pass = ConfigurationManager.AppSettings.Get("userPass");
      var domain = ConfigurationManager.AppSettings.Get("userDomain");

      if (!string.IsNullOrEmpty(user) && !string.IsNullOrEmpty(pass) && !string.IsNullOrEmpty(domain))
      {
        credentials.Windows.ClientCredential = new System.Net.NetworkCredential(user, pass, domain);
      }
      else
        credentials.Windows.ClientCredential = CredentialCache.DefaultNetworkCredentials;


      return new OrganizationServiceProxy(new Uri(crmOrgServiceUrl), null, credentials, null);
    }
  }
}
