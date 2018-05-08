using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Componentes", Schema ="AGM")]
    public class Componente : EntidadBase
    {
        [Key]
        [Column("idComponente")]
        public int ComponenteId { get; set; }
         public short Orden { get; set; }

        [Column("idAspecto")]
        public int AspectoId { get; set; }
        public string Tipo { get; set; }
        public string Descripcion { get; set; }

        public virtual IEnumerable<Variable> Variables { get; set; }

    }




}
