using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Minerales", Schema = "AGM")]
    public class Mineral : EntidadBase
    {   
        [Key]
        [Column("idMineral")]
        public int MineralId { get; set; }
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public string Tipo { get; set; }        
     
    }
}
