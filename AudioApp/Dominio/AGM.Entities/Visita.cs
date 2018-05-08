using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Visitas", Schema = "AGM")]
    public class Visita : EntidadBase
    {
        public Visita()
        {
        }

        [Key]
        [Column("idVisita")]
        public int VisitaId { get; set; }
        [Column("idUPM")]
        public int UPMId { get; set; }
        [Column("idRuta")]
        public int RutaId { get; set; }
        [Column("idProfesional")]
        public int ProfesionalId { get; set; }
        public short NumVisita { get; set; }

        public short NumLugaresTrabajo { get; set; }
        public string Observaciones { get; set; }

        public string Codigo { get; set; }

        public DateTime? FechaInicio { get; set; }

        public DateTime? FechaFin { get; set; }

        

        [Column("idProyecto")]
        public int ProyectoId { get; set; }        
                                       
        public virtual UPM UPM { get; set; }
        public virtual Ruta Ruta { get; set; }
        public virtual Proyecto Proyecto { get; set; }
        public virtual Profesional Profesional { get; set; }

        public virtual List<LugarTrabajo> LugaresTrabajo { get; set; }
        public virtual List<Anexo> Anexos { get; set; }
        public virtual List<RespuestaUPM> RespuestasUPM { get; set; }
    }
}
