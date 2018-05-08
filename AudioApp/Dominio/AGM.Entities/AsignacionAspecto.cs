using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("AsignacionAspectos", Schema = "AGM")]
    public class AsignacionAspecto : EntidadBase
    {
       
        [Column("idAspecto")]
        public int AspectoId { get; set; }
        [Column("idModelo")]
        public int ModeloId { get; set; }     
        public virtual Aspecto Aspecto { get; set; }
        public virtual Modelo Modelo { get; set; }
    }
}
