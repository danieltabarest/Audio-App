using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AudioApp.Server.Controllers
{
    public class BaseController : Controller
    {
        public int ProfesionalId { get; set; }
        public bool IsSessionValida()
        {
            try
            {
                //if (System.Web.HttpContext.Current.Session["oUserPerson"] == null)
                //{
                //    return false;
                //}
                //ProfesionalId = (int)System.Web.HttpContext.Current.Session["idProfesional"];
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
         }
    }
}