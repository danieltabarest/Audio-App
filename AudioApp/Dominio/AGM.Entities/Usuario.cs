using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AGM.Entities
{
    [Table("Usuarios", Schema = "AGM")]
    public class Usuario : EntidadBase
    {
      
          
        [Key]
        [Column("idUsuario")]
        public int UsuarioId { get; set; }
        [Column("idProfesional")]
        public int? ProfesionalId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }       
        public virtual Profesional Profesional { get; set; }
       
    }
    }


