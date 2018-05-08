using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("AsignacionProfesionales", Schema = "AGM")]
    public class AsignacionProfesional : EntidadBase
    {
       
        [Column("idProyecto")]
        public int ProyectoId { get; set; }
        [Column("idProfesional")]
        public int ProfesionalId { get; set; }     
        public virtual Proyecto Proyecto { get; set; }
        public virtual Profesional Profesional { get; set; }
    }
}
