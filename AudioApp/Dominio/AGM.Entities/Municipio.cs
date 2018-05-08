using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace AGM.Entities
{
    [Table("Municipios", Schema = "AGM")]
    public class Municipio : EntidadBase
    {

        [Key]
        [Column("idMunicipio")]
        public int MunicipioId { get; set; }

        public string Codigo { get; set; }
        public string Descripcion { get; set; }    
        public string CodDepartamento { get; set; }     
        
      //  public virtual Departamento Departamento { get; set; }
        
       
    }
}
