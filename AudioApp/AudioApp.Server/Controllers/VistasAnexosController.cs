using AGM.Entities;
using AudioApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AudioApp.Server.Controllers
{
    public class VistasAnexosController : BaseController
    {
        private AudioAppContext oContext;

        public VistasAnexosController()
        {
            oContext = new AudioAppContext();
        }

        // GET: VistasAnexos
        public ActionResult IndexVistasAnexos()
        {
            if (!this.IsSessionValida())
            {
                return RedirectToAction("Index", "Login");
            }

            return View();
        }

        public JsonResult GetAnexos(int UPMId, int VisitaId)
        {
            AudioAppContext db = new AudioAppContext();

            try
            {

                //string Rol = Convert.ToString(System.Web.HttpContext.Current.Session["Rol"]);

                var liAnexos = from a in db.Anexos
                               join u in db.UPMs on a.UPMId equals u.UPMId
                               join v in db.Visitas on a.VisitaId equals v.VisitaId
                               where (a.UPMId == UPMId && a.EstadoId == 7)
                               //where (a.UPMId == UPMId && a.VisitaId == VisitaId && a.EstadoId == 7)
                               select new
                               {
                                   UPMs = u.Nombre,
                                   Visita = v.Codigo,
                                   Descripcion = a.Descripcion,
                                   Tipo = a.Tipo,
                                   URL = a.URL
                               };

                return Json(liAnexos.ToList(), JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
            finally
            {
                db.Dispose();
            }
        }

        public JsonResult GetUrl()
        {            

            try
            {
                //string fileSavePath = Path.Combine(Server.MapPath("~/UploadedFiles").ToString();
                string fileSavePath = Server.MapPath("~/UploadedFiles");
                return Json(fileSavePath, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }            
        }

        public JsonResult GetFile(string sFileName)
        {
            try
            {
                //Response.Clear();
                //Response.ContentType = "application/octet-stream";
                //Response.AddHeader("Content-Disposition", "attachment; filename='" + sFileName + "');
                //Response.WriteFile(Server.MapPath(@"~/UploadedFiles/actualfile.pdf"));
                //Response.End();

                return null;
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}