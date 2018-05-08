using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Modelos", Schema = "AGM")]
    public class Modelo: EntidadBase
    {
        [Key]
        [Column("idModelo")]
        public int ModeloId { get; set; }
        public string Descripcion { get; set; }

        public string Version { get; set; }

        public DateTime? Fecha { get; set; }

    }
}
