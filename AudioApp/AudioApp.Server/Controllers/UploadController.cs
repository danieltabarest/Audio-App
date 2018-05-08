using AGM.Entities;
using AudioApp.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace AudioApp.Server.Controllers
{
    public class UploadsController : ApiController
    {
        [Route("api/Files/Upload")]
        public async Task<string> Post()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;

                if (httpRequest.Files.Count > 0)
                {
                    foreach (string file in httpRequest.Files)
                    {
                        var postedFile = httpRequest.Files[file];

                        var fileName = postedFile.FileName.Split('\\').LastOrDefault().Split('/').LastOrDefault();

                        var filePath = HttpContext.Current.Server.MapPath("~/Uploads/" + fileName);

                        postedFile.SaveAs(filePath);

                        return "/Uploads/" + fileName;
                    }
                }
            }
            catch (Exception exception)
            {
                return exception.Message;
            }

            return "no files";
        }

        [HttpPost]
        public IHttpActionResult SetAnexosADO([FromBody]List<Anexo> list)
        {
            try
            {
                string strConexion = ConfigurationManager.ConnectionStrings["AudioAppContext"].ToString();
                ADOAnexos objADO = new ADOAnexos(strConexion);
                string strResult = objADO.SincronizacionAnexos(list);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return Ok("Error: " + ex.Message);
            }
        }
    }
}