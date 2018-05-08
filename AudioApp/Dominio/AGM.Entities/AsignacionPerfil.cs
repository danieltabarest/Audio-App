using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("AsignacionPerfiles", Schema = "AGM")]
    public class AsignacionPerfil : EntidadBase
    {
       
        [Column("idAspecto")]
        public int AspectoId { get; set; }
        [Column("idPerfil")]
        public int PerfilId { get; set; }     
        public bool Requerido { get; set; }
        public virtual Aspecto Aspecto { get; set; }
        public virtual Perfil Perfil { get; set; }
    }
}
