using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("AsignacionUPMs", Schema = "AGM")]
    public class AsignacionUPM : EntidadBase
    {
       
        [Column("idUPM")]
        public int UPMId { get; set; }
        [Column("idProyecto")]
        public int ProyectoId { get; set; }     
        
        public virtual UPM UPM { get; set; }
    }
}
