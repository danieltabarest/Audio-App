using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Rutas", Schema = "AGM")]
    public class Ruta : EntidadBase
    {
        [Key]
        [Column("idRuta")]
        public int RutaId { get; set; }
        [Column("idModelo")]
        public int ModeloId { get; set; }
        public string Descripcion { get; set; }

        public string Tipo { get; set; }
            

    }
}
