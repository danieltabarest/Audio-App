using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Proyectos", Schema = "AGM")]
    public class Proyecto: EntidadBase
    {

        [Key]
        [Column("idProyecto")]
        public int ProyectoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public DateTime? FechaInicio { get; set; }
        public DateTime? FechaFin { get; set; }

        [Column("idModelo")]
        public int ModeloId { get; set; }
    }
}
