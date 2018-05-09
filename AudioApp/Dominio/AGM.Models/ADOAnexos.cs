using AGM.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace AudioApp.Models
{
    public class ADOAnexos
    {
        private string StringConection;
        MSSQLConection ObjConection;
        SqlConnection DbConection = new SqlConnection();
        SqlTransaction TrTransaction = null;
        SqlParameter spParameters = new SqlParameter();
        SqlDataReader sDataReader = null;

        string StrNameSP = "";
        object[] oParam;
        string sResult = string.Empty;
        string Lstr_sql = string.Empty;

        public ADOAnexos(string stringconection)
        {
            StringConection = stringconection;
        }

        public void StartGeneral()
        {
            try
            {
                ObjConection = new MSSQLConection(StringConection);
                DbConection = ObjConection.OpenDataBase();
                TrTransaction = StartTransaction(DbConection);
            }
            catch (Exception ex)
            {

            }
        }

        public SqlTransaction StartTransaction(SqlConnection CnConTrans)
        {
            if (CnConTrans.State == ConnectionState.Executing)
            {
                CnConTrans.Close();
            }
            SqlTransaction objTran = CnConTrans.BeginTransaction();
            return objTran;
        }

        public string SincronizacionAnexos(List<Anexo> list)
        {
            StartGeneral();
            foreach (var item in list)
            {
                StrNameSP = "UspSetAnexos";

                oParam = new object[] {item.ID,
                                          item.URL,
                                          item.CodNivel,
                                          item.VisitaId,
                                          item.UPMId,
                                          new Guid(),
                                          item.Descripcion,
                                          item.Tipo,
                                          item.UsuarioCreacion,
                                          item.UsuarioModificacion,
                                          item.FechaModificacion,
                                          item.EstadoId,
                                         new Guid(),};

                sResult = ObjConection.ExecuteNonQuery(ref StrNameSP, oParam, DbConection, TrTransaction);
                if (sResult != "success")
                {
                    TrTransaction.Rollback();
                    return "error";
                }
            }

            TrTransaction.Commit();
            return "success";
        }

    }
}
