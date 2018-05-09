using AGM.Entities;
using AudioApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AGM.Models
{
    public class DownloadData
    {
        AudioAppContext db;
    }

    public class DescripcionPersona
    {
        public int PersonaId { get; set; }
        public string NombresApellidos { get; set; }
    }

    public class UsuarioProfesional
    {
        public int UsuarioId { get; set; }
        public int ProfesionalId { get; set; }
        public int PersonaId { get; set; }
        public string UserName { get; set; }
        public string NombresApellidos { get; set; }
        public string Perfil { get; set; }
        public string Rol { get; set; }

        public int RolId { get; set; }

    }
}
