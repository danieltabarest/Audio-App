using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Estados", Schema = "AGM")]
    public class Estado : EntidadBase
    {
        public string Tipo { get; set; }
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public int Orden { get; set; }
    }
}
