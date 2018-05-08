using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{

    [Table("Paises", Schema = "AGM")]
    public class Pais : EntidadBase
    {
        public Pais()
        {
           // this.Departamentos = new HashSet<Departamento>();
        }

        [Key]
        [Column("idPais")]
        public int PaisId { get; set; }
       public string Codigo { get; set; }
        public string Descripcion { get; set; }
       
       // public virtual ICollection<Departamento> Departamentos { get; set; }
    }
}
