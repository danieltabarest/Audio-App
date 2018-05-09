using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace AudioApp.Models
{
    public class Anexo:EntidadBase
    {
        public int AnexoId { get; set; }
        public string URL { get; set; }
        public string CodNivel { get; set; }
        public int? VisitaId { get; set; }
        public int? LugarTrabajoId { get; set; }
        public int? UPMId { get; set; }
        public string Descripcion { get; set; }
        public string Tipo { get; set; }
        
        //public IEnumerable<Anexo> Anexos { get; internal set; }
      
        public string Path { get; internal set; }
        public string Image { get; internal set; }

        public Anexo()
        {
        }

        public Anexo(string iD, int anexoId, string uRL, int? lugarTrabajoId, int? uPMId, string codNivel, int? visitaId, string descripcion, string tipo, int estadoId,string path, string image)
        {
            ID = iD;
            AnexoId = anexoId;
            URL = uRL;
            LugarTrabajoId = lugarTrabajoId;
            UPMId = uPMId;
            CodNivel = codNivel;
            VisitaId = visitaId;
            Path = path;
            Image = image;
            Descripcion = descripcion;
            Tipo = tipo;
            EstadoId = estadoId;
            FechaCreacion = DateTime.Now;
            UsuarioCreacion = App.User.UserName;
            UsuarioModificacion = App.User.UserName;
            FechaModificacion = DateTime.Now;
        }
    }
}
