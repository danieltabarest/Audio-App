using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace AGM.Entities
{
    [Table("Departamentos", Schema = "AGM")]
    public class Departamento : EntidadBase
    {
        public Departamento()
        {
          //  this.Municipios = new HashSet<Municipio>();            
        }

        [Key]
        [Column("idDepartamento")]
        public int DepartamentoId { get; set; }

        public string Codigo { get; set; }
        public string Descripcion { get; set; }

        [Column("idPais")]
        public int PaisId { get; set; }     
        
        //public virtual Pais Pais { get; set; }
        
       // public virtual ICollection<Municipio> Municipios { get; set; }
    }
}
