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
    public class AnexosController : BaseController
    {
        private AudioAppContext oContext;

        public AnexosController()
        {
            oContext = new AudioAppContext();
        }

        // GET: Anexos
        public ActionResult IndexAnexos()
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

                var liAnexos = from a in db.Anexos
                               select new
                               {
                                   UPMs = a.ID,
                                   Visita = a.Tipo,
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