using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Text.RegularExpressions;
using System.Data.Common;
using System.IO;

namespace AudioApp.Models
{
    public class MSSQLConection
    {
        private string StringConection;
        public MSSQLConection(string stringconection)
        {
            StringConection = stringconection;
        }

        public SqlConnection OpenDataBase()
        {
            try
            {
                SqlConnection CnCon = new SqlConnection(StringConection);
                CnCon.Open();
                return CnCon;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void CloseDataBase(SqlConnection OpenConection, SqlDataReader DataReader, string NameMethod)
        {
            if (OpenConection.State == ConnectionState.Closed && (DataReader != null && !DataReader.IsClosed))
            {
                WriteLog("C", NameMethod + "||" + "**********CONEXION BDD CERRADA**********");
            }

            if (OpenConection.State == ConnectionState.Open && OpenConection != null)
            {
                SqlConnection.ClearPool(OpenConection);
                OpenConection.Close();
                OpenConection.Dispose();
                OpenConection = null;
            }

            if (DataReader != null)
            {
                DataReader.Close();
                DataReader.Dispose();
            }
        }

        public string ExecuteNonQuery(string strSQL, SqlConnection pcConn, SqlTransaction pcTrans)
        {
            try
            {
                SqlCommand sCmd = new SqlCommand(strSQL, pcConn, pcTrans);
                sCmd.ExecuteNonQuery();

                return "OK";
            }
            catch (Exception e)
            {
                return e.Message.ToString();
            }

        }

        public string ExecuteNonQuery(ref string sNameSP, object[] oParameter, SqlConnection pcConn, SqlTransaction pcTrans)
        {
            SqlParameter[] sqlParam = null;
            try
            {
                sqlParam = CreateParameters(sNameSP, oParameter);

                SqlCommand sResultado = new SqlCommand(sNameSP, pcConn, pcTrans);
                sResultado.CommandType = CommandType.StoredProcedure;

                if (sqlParam.Length > 0)
                {
                    sResultado.Parameters.AddRange(sqlParam.ToArray());
                }

                sResultado.ExecuteNonQuery();

                foreach (SqlParameter p in sResultado.Parameters)
                {
                    if (p.Direction == ParameterDirection.InputOutput || p.Direction == ParameterDirection.Output)
                    {
                        sNameSP = p.Value.ToString();
                    }
                }
                return "success";
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public SqlParameter[] CreateParameters(string NameSP, object[] oParameters)
        {
            List<SqlParameter> Params = new List<SqlParameter>();
            SqlParameter pParam = null;   //Una variable para llenar la colección
            string strResultado = string.Empty; // Para devolver el resultado
            SqlDataReader sReader = null;    //El reader para obtener la lista de parámetros

            SqlCommand sCommand = new SqlCommand("usp_ListarParametrosSP");  //Comando que me devuelve los parámetros que tiene el SP;

            sCommand.CommandType = CommandType.StoredProcedure;  //Le digo que es SP
            sCommand.Parameters.Add("@nombreSP", SqlDbType.VarChar, 256);
            sCommand.Parameters["@nombreSP"].Value = NameSP;

            sCommand.Connection = new SqlConnection(StringConection);
            sCommand.Connection.Open();  //Abro la conexión

            sReader = sCommand.ExecuteReader(CommandBehavior.CloseConnection);

            //Si hay datos
            if (sReader.HasRows)
            {
                while (sReader.Read())
                {
                    //Lleno la colección con todos los parámetros
                    pParam = new SqlParameter();
                    pParam.ParameterName = sReader.GetString(1);
                    switch (sReader.GetString(2))
                    {
                        #region Casos
                        case "int":
                            pParam.SqlDbType = SqlDbType.Int;
                            break;

                        case "varchar":
                            pParam.SqlDbType = SqlDbType.VarChar;
                            pParam.Size = sReader.GetInt32(3);
                            break;

                        case "char":
                            pParam.SqlDbType = SqlDbType.Char;
                            pParam.Size = sReader.GetInt32(3);
                            break;

                        case "nvarchar":
                            pParam.SqlDbType = SqlDbType.NVarChar;
                            pParam.Size = sReader.GetInt32(3);
                            break;

                        case "datetime":
                            pParam.SqlDbType = SqlDbType.DateTime;
                            break;

                        case "decimal":
                            pParam.SqlDbType = SqlDbType.Decimal;
                            pParam.Size = sReader.GetInt32(3);
                            break;

                        case "float":
                            pParam.SqlDbType = SqlDbType.Float;
                            break;

                        case "money":
                            pParam.SqlDbType = SqlDbType.Money;
                            break;

                        case "real":
                            pParam.SqlDbType = SqlDbType.Real;
                            break;

                        case "bigint":
                            pParam.SqlDbType = SqlDbType.BigInt;
                            break;

                        case "bit":
                            pParam.SqlDbType = SqlDbType.Bit;
                            break;
                            #endregion
                    }
                    if (sReader.GetBoolean(6))
                    {
                        pParam.Direction = ParameterDirection.InputOutput;
                    }
                    Params.Add(pParam);
                }
            }

            //Cierro la colección
            if (sReader.IsClosed == false)
            {
                sReader.Close();
            }

            //Ahora recorro la lista de valores que me enviaron y lo voy asignando a los parámetros
            for (int I = 0; I <= oParameters.Length - 1; I++)
            {
                if (I <= Params.Count - 1)
                {
                    Params[I].Value = oParameters[I];
                }
            }

            SqlConnection.ClearPool(sCommand.Connection);
            sCommand.Connection.Close();
            sCommand.Connection.Dispose();
            sCommand.Connection = null;

            return Params.ToArray();
        }

        public SqlDataReader ExecuteNonReader(string strNombreSP)
        {
            SqlDataReader reaDer = null;
            try
            {
                SqlCommand sCmd = new SqlCommand(strNombreSP);
                sCmd.CommandType = CommandType.StoredProcedure;
                sCmd.Connection = new SqlConnection(StringConection);
                sCmd.Connection.Open();

                reaDer = sCmd.ExecuteReader(CommandBehavior.CloseConnection);

                return reaDer;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public SqlDataReader ExecuteNonReader(string strSQL, List<SqlParameter> parametros)
        {
            SqlDataReader sReader = null;
            try
            {
                SqlCommand sCmd = new SqlCommand(strSQL);
                if (parametros.Count > 0)
                {
                    foreach (SqlParameter param in parametros)
                        sCmd.Parameters.AddWithValue(param.ParameterName, param.Value);
                }

                sCmd.Connection = new SqlConnection(StringConection);
                sCmd.Connection.Open();

                sReader = sCmd.ExecuteReader(CommandBehavior.CloseConnection);
                return sReader;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public SqlDataReader ExecuteNonReader(string strNombreSP, object[] objParametro)
        {
            SqlDataReader reaDer = null;
            SqlParameter[] sqlParam = null;
            try
            {
                sqlParam = CreateParameters(strNombreSP, objParametro);

                SqlCommand sCmd = new SqlCommand(strNombreSP);
                sCmd.CommandType = CommandType.StoredProcedure;
                if (sqlParam.Length > 0)
                {
                    sCmd.Parameters.AddRange(sqlParam.ToArray());
                }

                sCmd.Connection = new SqlConnection(StringConection);
                sCmd.Connection.Open();

                reaDer = sCmd.ExecuteReader(CommandBehavior.CloseConnection);

                return reaDer;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Tipo">S = SQL, O= OTROS, C = CONEXION BDD CERRADA</param>
        /// <param name="exepcion"></param>
        public void WriteLog(string Tipo, string exepcion)
        {
            try
            {
                string sourcePath = "";
                exepcion = DateTime.Now.ToString() + "|||||" + exepcion;
                if (Tipo == "C")
                {
                    sourcePath = "c:/TextFiles/Logconexion";
                }
                string sFileName = DateTime.Now.ToString("yyyyMMdd") + ".txt";
                if (!System.IO.Directory.Exists(sourcePath))
                {
                    System.IO.Directory.CreateDirectory(sourcePath);
                }
                string sourceFile = System.IO.Path.Combine(sourcePath, sFileName);
                if (!File.Exists(sourceFile))
                {
                    using (var fileStream = File.Create(sourceFile))
                    {

                    }
                }
                using (System.IO.StreamWriter file =
               new System.IO.StreamWriter(sourceFile, true))
                {
                    file.WriteLine(exepcion);
                    file.WriteLine("---------------------------------------------------------------------------------");
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
