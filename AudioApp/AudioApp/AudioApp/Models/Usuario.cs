using System;
using System.Collections.Generic;
using System.Linq;

namespace AudioApp.Models
{

    public class Usuario : EntidadBase
    {
        public Usuario(string iD, int usuarioId, int? profesionalId, string userName, string password, int estadoId)
        {
            ID = iD;
            UsuarioId = usuarioId;
            ProfesionalId = profesionalId;
            UserName = userName;
            Password = password;
            EstadoId = estadoId;
        }

        public int UsuarioId { get; set; }
        public int? ProfesionalId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        //public virtual ICollection<Rol> Roles { get; set; }
        //public virtual Profesional Profesional { get; set; }
        //public virtual IEnumerable<Proyecto> Proyectos { get; set; }
        //public virtual Proyecto ProyectoActivo { get; set; }
    }

} 
    
    


