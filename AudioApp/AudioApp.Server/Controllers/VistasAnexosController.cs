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

        public JsonResult GetAspectos(int UPMId)
        {
            AudioAppContext db = new AudioAppContext();
            try
            {
                var iResult = db.LugaresTrabajo.Where(x => x.UPMId == UPMId).ToList();
                string Tipo = iResult.Count == 0 ? "UPM" : "LugarTrabajo";

                //var lAspecto = db.Aspectos.Where(x => x.Tipo == Tipo);

                var lAspecto = from a in oContext.Aspectos
                               where a.Tipo == Tipo
                               select new
                               {
                                   AspectoId = a.AspectoId,
                                   Codigo = a.Codigo,
                                   NombreClave = a.NombreClave,
                                   Descripcion = a.Descripcion
                               };

                return Json(lAspecto.ToList(), JsonRequestBehavior.AllowGet);
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

        
        public JsonResult GetUPMsporProyectos(int ProyectoId)
        {
            AudioAppContext db = new AudioAppContext();

            try
            {
                var lstUPMs = from u in db.UPMs
                              join au in db.AsignacionUPMs on u.UPMId equals au.UPMId
                              where (au.ProyectoId == ProyectoId)
                              select new
                              {
                                  UPMId = u.UPMId,
                                  Codigo = u.Codigo,
                                  Nombre = u.Nombre
                              };

                return Json(lstUPMs.ToList(), JsonRequestBehavior.AllowGet);
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

        public JsonResult GetVisita(int IdUPM)
        {
            AudioAppContext db = new AudioAppContext();

            try
            {

                int ProfesionalId = Convert.ToInt32(System.Web.HttpContext.Current.Session["idProfesional"]);

                var lstVisitas = from v in db.Visitas
                                 join r in db.Rutas on v.RutaId equals r.RutaId
                                 where (v.UPMId == IdUPM && v.ProfesionalId == ProfesionalId && v.EstadoId == 7)
                                 select new
                                 {
                                     VisitaId = v.VisitaId,
                                     RutaId = r.RutaId,
                                     NumVisita = v.NumVisita,
                                     NumLugaresTrabajo = v.NumLugaresTrabajo,
                                     Descripcion = v.Codigo,
                                     RutaDescripcion = r.Descripcion
                                 };

                return Json(lstVisitas.ToList(), JsonRequestBehavior.AllowGet);

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

        public JsonResult GetInconformidad(InconformidadAspectos iIncoAspecto)
        {
            AudioAppContext db = new AudioAppContext();
            try
            {
                var iResult = db.InconformidadAspectos.Where(x => x.ProyectoId == iIncoAspecto.ProyectoId && x.UPMId == iIncoAspecto.UPMId && x.VariableId == iIncoAspecto.VariableId && x.RespuestaId == iIncoAspecto.RespuestaId).ToList();
                return Json(iResult.ToList(), JsonRequestBehavior.AllowGet);
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