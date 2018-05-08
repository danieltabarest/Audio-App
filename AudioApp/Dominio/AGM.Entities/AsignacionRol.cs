using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("AsignacionRoles", Schema = "AGM")]
    public class AsignacionRol : EntidadBase
    {
       
        [Column("idRol")]
        public int RolId { get; set; }
        [Column("idUsuario")]
        public int UsuarioId { get; set; }     
        public virtual Rol Rol { get; set; }
        public virtual Usuario Usuario { get; set; }
    }
}
