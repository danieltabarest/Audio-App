using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AGM.Entities
{
    [Table("Roles", Schema = "AGM")]
    public class Rol : EntidadBase
    {

        [Key]
        [Column("idRol")]
        public int RolId { get; set; }         
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
         

        }   

}
