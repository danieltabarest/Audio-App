using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Profesionales", Schema = "AGM")]
    public class Profesional : EntidadBase
    {
        public Profesional()
        {
            this.AsignacionesProfesional = new HashSet<AsignacionProfesional>();
        }

        [Key]
        [Column("idProfesional")]
        public int ProfesionalId { get; set; }

        public string Matricula { get; set; }
        [Column("idPersona")]
        public int PersonaId { get; set; }

        [Column("idPerfil")]
        public int PerfilId { get; set; }

        public virtual Persona Persona { get; set; }
        public virtual ICollection<AsignacionProfesional> AsignacionesProfesional { get; set; }

    }
}
