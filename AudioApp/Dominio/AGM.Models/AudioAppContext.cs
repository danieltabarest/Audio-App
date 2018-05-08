using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using AGM.Entities;
using AGM.Entities;

namespace AudioApp.Models
{
    public class AudioAppContext : DbContext
    {
        public AudioAppContext()
            : base("name=AudioAppContext")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Modelo> Modelos { get; set; }
        public DbSet<Aspecto> Aspectos { get; set; }
        public DbSet<Componente> Componentes { get; set; }
        public DbSet<Variable> Variables { get; set; }
        public virtual DbSet<OpcionRespuesta> OpcionesRespuesta { get; set; }
        public virtual DbSet<Estado> Estados { get; set; }
        public virtual DbSet<Mineral> Minerales { get; set; }
                
        public virtual DbSet<Pais> Paises { get; set; }
        public virtual DbSet<Departamento> Departamentos { get; set; }
        public virtual DbSet<Municipio> Municipios { get; set; }


        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Rol> Roles { get; set; }

        public DbSet<Perfil> Perfiles { get; set; }
        public DbSet<Persona> Personas { get; set; }
        public DbSet<Profesional> Profesionales { get; set; }
        public DbSet<Proyecto> Proyectos { get; set; }

        public virtual DbSet<RutaVariable> RutaVariables { get; set; }
        public virtual DbSet<RutaFiltro> RutaFiltros { get; set; }
        public virtual DbSet<Ruta> Rutas { get; set; }
        public DbSet<SincronizacionTabla> SincronizacionTablas { get; set; }

        public virtual DbSet<TituloMinero> TitulosMineros { get; set; }
        public virtual DbSet<UPM> UPMs { get; set; }


        public virtual DbSet<AsignacionAspecto> AsignacionAspectos { get; set; }
        public virtual DbSet<AsignacionPerfil> AsignacionPerfiles { get; set; }
        public virtual DbSet<AsignacionProfesional> AsignacionProfesionales { get; set; }
        public virtual DbSet<AsignacionRol> AsignacionRoles { get; set; }
        public virtual DbSet<AsignacionUPM> AsignacionUPMs { get; set; }


        public virtual DbSet<RespuestaUPM> RespuestasUPMs { get; set; }
        public virtual DbSet<RespuestaLugarTrabajo> RespuestasLugaresTrabajo { get; set; }
        public virtual DbSet<LugarTrabajo> LugaresTrabajo { get; set; }
        public virtual DbSet<Visita> Visitas { get; set; }
        public virtual DbSet<InconformidadAspectos> InconformidadAspectos { get; set; }
        public virtual DbSet<Anexo> Anexos { get; set; }


    }
}
