using System;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace MSDYN365.CommonHelper
{
  public static class SqlHelper
  {
    #region -- == вспомогательные методы == --

    /// <summary>
    /// подготовка команды для выполнения
    /// </summary>
    /// <param name="command">объект - команда</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <param name="timeout">таймаут</param>
    /// <param name="commandParameters">список параметров</param>
    private static void PrepareCommand(SqlCommand command, CommandType commandType, string commandText,
  int timeout, params SqlParameter[] commandParameters)
    {
      command.CommandText = commandText;
      command.CommandType = commandType;
      command.CommandTimeout = timeout;

      if (commandParameters != null)
      {
        AttachParameters(command, commandParameters);
      }
      return;
    }

    /// <summary>
    /// прикрипление параметров
    /// </summary>
    /// <param name="command">объект - команда</param>
    /// <param name="commandParameters">список параметров</param>
    private static void AttachParameters(SqlCommand command, params SqlParameter[] commandParameters)
    {
      foreach (var p in commandParameters)
      {
        if ((p.Direction == ParameterDirection.Output) && (p.Value == null))
        {
          p.Value = DBNull.Value;
        }
        command.Parameters.Add(p);
      }
    }

    #endregion

    #region -- == GetDataTable == --

    /// <summary>
    /// ф. возвращает набор данных в виде одной таблицы
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandText">текст команды</param>
    /// <returns></returns>
    public static DataTable GetDataTable(string connectionString, string commandText)
    {
      return GetDataTable(connectionString, CommandType.Text, commandText, 30, null);
    }

    /// <summary>
    /// ф. возвращает набор данных в виде одной таблицы
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <returns></returns>
    public static DataTable GetDataTable(string connectionString, CommandType commandType, string commandText)
    {
      return GetDataTable(connectionString, commandType, commandText, 30, null);
    }

    /// <summary>
    /// ф. возвращает набор данных в виде одной таблицы
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <param name="timeout">таймаут</param>
    /// <returns></returns>
    public static DataTable GetDataTable(string connectionString, CommandType commandType, string commandText, int timeout)
    {
      return GetDataTable(connectionString, commandType, commandText, timeout, null);
    }

    /// <summary>
    /// ф. возвращает набор данных в виде одной таблицы
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <param name="timeout">таймаут</param>
    /// <param name="commandParameters">список параметров</param>
    /// <returns></returns>
    public static DataTable GetDataTable(string connectionString, CommandType commandType, string commandText, int timeout,
      params SqlParameter[] commandParameters)
    {
      using (var connection = new SqlConnection(connectionString))
      {
        var dataTable = new DataTable();
        var command = connection.CreateCommand();

        try
        {
          PrepareCommand(command, commandType, commandText, timeout, commandParameters);
          var dataAdapter = new SqlDataAdapter(command);
          dataAdapter.Fill(dataTable);
        }
        finally
        {
          connection.Close();
          connection.Dispose();
          command.Parameters.Clear();
          command.Dispose();
        }

        return dataTable;
      }
    }

    #endregion

    #region -- == ExecuteNonQuery == --

    /// <summary>
    /// ф. выполняем команду и возвращает кол-во обработанных строк
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandText">текст команды</param>
    /// <returns></returns>
    public static int ExecuteNonQuery(string connectionString, string commandText)
    {
      return ExecuteNonQuery(connectionString, CommandType.Text, commandText, 30);
    }

    /// <summary>
    /// ф. выполняем команду и возвращает кол-во обработанных строк
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <returns></returns>
    public static int ExecuteNonQuery(string connectionString, CommandType commandType, string commandText)
    {
      return ExecuteNonQuery(connectionString, commandType, commandText, 30);
    }

    /// <summary>
    /// ф. выполняем команду и возвращает кол-во обработанных строк
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <param name="timeout">таймаут</param>
    /// <returns></returns>
    public static int ExecuteNonQuery(string connectionString, CommandType commandType, string commandText, int timeout)
    {
      return ExecuteNonQuery(connectionString, commandType, commandText, timeout, null);
    }

    /// <summary>
    /// ф. выполняем команду и возвращает кол-во обработанных строк
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <param name="timeout">таймаут</param>
    /// <param name="commandParameters">список параметров</param>
    /// <returns></returns>
    public static int ExecuteNonQuery(string connectionString, CommandType commandType, string commandText, int timeout,
      params SqlParameter[] commandParameters)
    {
      var retVal = -1;
      using (var connection = new SqlConnection(connectionString))
      {
        var command = connection.CreateCommand();

        try
        {
          PrepareCommand(command, commandType, commandText, timeout, commandParameters);
          connection.Open();
          retVal = command.ExecuteNonQuery();
        }
        finally
        {
          connection.Close();
          connection.Dispose();
          command.Parameters.Clear();
          command.Dispose();
        }
      }

      return retVal;
    }

    private static string GetParamStr(SqlCommand command)
    {
      var sb = new StringBuilder();
      foreach (SqlParameter item in command.Parameters)
      {
        sb.Append($"Name:{item.ParameterName}|Value:{item.Value}{Environment.NewLine}");
      }
      return sb.ToString();
    }

    #endregion

    #region -- == ExecWithReturnParam == --

    /// <summary>
    /// ф. выполняет команду и возвращает ко-во обработанных строк, 
    /// возвращает значение output-параметров
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandText">имя процедуры</param>
    /// <param name="timeout">30</param>
    /// <param name="commandParameter">список параметров</param>
    /// <returns></returns>
    public static int ExecWithReturnParam(string connectionString, string commandText, int timeout, ref SqlParameter[] commandParameter)
    {
      var retVal = -1;
      using (var connection = new SqlConnection(connectionString))
      {
        var command = connection.CreateCommand();

        try
        {
          PrepareCommand(command, CommandType.StoredProcedure, commandText, timeout, commandParameter);
          connection.Open();
          retVal = command.ExecuteNonQuery();
        }
        finally
        {
          connection.Close();
          connection.Dispose();
          command.Parameters.Clear();
          command.Dispose();
        }
      }

      return retVal;
    }

    #endregion

    #region -- == ExecuteScalar == --

    /// <summary>
    /// ф. выполняет команду и возвращает значение первого столбца первой строки
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandText">текст команды</param>
    /// <returns></returns>
    public static object ExecuteScalar(string connectionString, string commandText)
    {
      return ExecuteScalar(connectionString, CommandType.Text, commandText, 30, null);
    }

    /// <summary>
    /// ф. выполняет команду и возвращает значение первого столбца первой строки
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <returns></returns>
    public static object ExecuteScalar(string connectionString, CommandType commandType, string commandText)
    {
      return ExecuteScalar(connectionString, commandType, commandText, 30, null);
    }

    /// <summary>
    /// ф. выполняет команду и возвращает значение первого столбца первой строки
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <param name="timeout">таймаут</param>
    /// <returns></returns>
    public static object ExecuteScalar(string connectionString, CommandType commandType, string commandText, int timeout)
    {
      return ExecuteScalar(connectionString, commandType, commandText, timeout, null);
    }

    /// <summary>
    /// ф. выполняет команду и возвращает значение первого столбца первой строки
    /// </summary>
    /// <param name="connectionString">строка коннекции</param>
    /// <param name="commandType">тип команды</param>
    /// <param name="commandText">текст команды</param>
    /// <param name="timeout">таймаут</param>
    /// <param name="commandParameters">список параметров</param>
    /// <returns></returns>
    public static object ExecuteScalar(string connectionString, CommandType commandType, string commandText, int timeout,
      params SqlParameter[] commandParameters)
    {
      object retVal = null;

      using (var connection = new SqlConnection(connectionString))
      {
        var command = connection.CreateCommand();

        try
        {
          PrepareCommand(command, commandType, commandText, timeout, commandParameters);
          connection.Open();
          retVal = command.ExecuteScalar();
        }
        finally
        {
          connection.Close();
          connection.Dispose();
          command.Parameters.Clear();
          command.Dispose();
        }

      }
      return retVal;
    }

    #endregion
  }
}
