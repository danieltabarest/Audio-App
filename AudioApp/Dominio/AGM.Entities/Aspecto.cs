using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Aspectos", Schema = "AGM")]
    public class Aspecto : EntidadBase
    {
        public Aspecto()
        {
            this.Componentes = new HashSet<Componente>();
        }
        [Key]
        [Column("idAspecto")]
        public int AspectoId { get; set; }
        public short Orden { get; set; }
     
        public string Tipo { get; set; }
        public string Codigo { get; set; }
        public string NombreClave { get; set; }
        public double? Porcentaje { get; set; }
        public string Descripcion { get; set; }

        public virtual ICollection<Componente> Componentes { get; set; }
    }
}
