using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AGM.Entities
{
    [Table("Perfiles", Schema = "AGM")]
    public class Perfil : EntidadBase
        {
        [Key]
        [Column("idPerfil")]
        public int PerfilId { get; set; }         
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        

        }   

}
