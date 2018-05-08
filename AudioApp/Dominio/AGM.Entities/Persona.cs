using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AGM.Entities
{
    [Table("Personas", Schema = "AGM")]
    public class Persona : EntidadBase
        {

        [Key]
        [Column("idPersona")]
        public int PersonaId { get; set; }
        [Column("idTipoIdentificacion")]
        public int TipoIdentificacionId { get; set; }
        public string Identificacion { get; set; }
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }

        public DateTime? FechaNacimiento { get; set; }

        public string Celular { get; set; }

        public string Telefono { get; set; }

        public string Correo { get; set; }

     
    }   

}
