using System;
using System.Collections.Generic;
using System.Linq;

namespace AudioApp.Models
{
    public class EntidadBase
    {
        public string ID { get; set; }
        public string UsuarioCreacion { get; set; }
        public DateTime? FechaCreacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public DateTime? FechaModificacion { get; set; }
        public int EstadoId { get; set; }

    }
}
