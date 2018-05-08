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

        public List<int> ProyectosPorMes()
        {
            try
            {
                db = new AudioAppContext();
                List<int> retorno = new List<int>();
                int year = DateTime.Now.Year;
                DateTime firstDay = new DateTime(year, 1, 1);
                DateTime lastDay = new DateTime(year, 12, 31);

                var data = (from p in db.Proyectos
                            where (p.FechaCreacion >= firstDay && p.FechaCreacion <= lastDay)
                            select new { p.ProyectoId, p.FechaCreacion }).ToList();

                var orderData = data.GroupBy(x => Convert.ToDateTime(x.FechaCreacion).Month);

                for (int i = 1; i <= 12; i++)
                    retorno.Add(orderData.Where(x => x.Key == i).Select(y => y.Count()).FirstOrDefault());

                return retorno;

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
        }

        public int ProyectosPorEstado(int estadoId)
        {
            db = new AudioAppContext();
            return db.Proyectos.Where(x => x.EstadoId == estadoId).Count();
        }

        public int UpmPorEstado(int estadoId)
        {
            db = new AudioAppContext();
            return db.UPMs.Where(x => x.EstadoId == estadoId).Count();
        }


        /// <summary>
        /// Método para cargar todos los estados filtrado por Tipo
        /// </summary>
        /// <param name="Tipo"></param>
        /// <returns></returns>
        public List<Estado> ListEstado(string Tipo)
        {
            try
            {
                db = new AudioAppContext();
                return db.Estados.Where(x => x.Tipo == Tipo).ToList();
            }
            catch (Exception ex)
            {
                throw;
            }
            finally
            {
                db.Dispose();
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public List<OpcionRespuesta> ListOpcionesRespuesta(string Tipo)
        {
            try
            {
                db = new AudioAppContext();

                var lOpcResp = (from o in db.OpcionesRespuesta
                                where (o.EstadoId == 1 && o.Tipo == Tipo)
                                select new
                                {
                                    OpcionRespuestaId = o.OpcionRespuestaId,
                                    ID = o.ID,
                                    ModeloId = o.ModeloId,
                                    Tipo = o.Tipo,
                                    Orden = o.Orden,
                                    Descripcion = o.Descripcion,
                                    UsuarioCreacion = o.UsuarioCreacion,
                                    FechaCreacion = o.FechaCreacion,
                                    UsuarioModificacion = o.UsuarioModificacion,
                                    FechaModificacion = o.FechaModificacion,
                                    EstadoId = o.EstadoId
                                }).ToList();

                List<OpcionRespuesta> ListOpcionResp = new List<OpcionRespuesta>();


                OpcionRespuesta iOpcionRespuesta = new OpcionRespuesta();
                foreach (var item in lOpcResp)
                {
                    iOpcionRespuesta = new OpcionRespuesta();
                    iOpcionRespuesta.OpcionRespuestaId = item.OpcionRespuestaId;
                    iOpcionRespuesta.OpcionRespuestaId = item.OpcionRespuestaId;
                    iOpcionRespuesta.ID = item.ID;
                    iOpcionRespuesta.ModeloId = item.ModeloId;
                    iOpcionRespuesta.Tipo = item.Tipo;
                    iOpcionRespuesta.Orden = item.Orden;
                    iOpcionRespuesta.Descripcion = item.Descripcion;
                    iOpcionRespuesta.UsuarioCreacion = item.UsuarioCreacion;
                    iOpcionRespuesta.FechaCreacion = item.FechaCreacion;
                    iOpcionRespuesta.UsuarioModificacion = item.UsuarioModificacion;
                    iOpcionRespuesta.FechaModificacion = item.FechaModificacion;
                    iOpcionRespuesta.EstadoId = item.EstadoId;
                    ListOpcionResp.Add(iOpcionRespuesta);
                }

                return ListOpcionResp;
            }
            catch (Exception ex)
            {
                throw;
            }
            finally
            {
                db.Dispose();
            }
        }

        public List<Perfil> ListPerfiles()
        {
            try
            {
                db = new AudioAppContext();
                return db.Perfiles.ToList();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                db.Dispose();
            }
        }

        public List<DescripcionPersona> ListPersonas()
        {
            List<DescripcionPersona> lstPersonas = new List<DescripcionPersona>();
            AudioAppContext db = new AudioAppContext();
            try
            {
                lstPersonas = (from p in db.Personas
                               select new DescripcionPersona
                               {
                                   PersonaId = p.PersonaId,
                                   NombresApellidos = p.PrimerNombre + " " + p.SegundoNombre + " " + p.PrimerApellido + " " + p.SegundoApellido
                               }).ToList();
            }
            catch (Exception ex)
            {
                ///Implementar logger para excepciones
            }
            finally
            {
                db.Dispose();
            }

            return lstPersonas;
        }

        public List<Modelo> ListModelos()
        {
            try
            {
                db = new AudioAppContext();
                return db.Modelos.ToList();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                db.Dispose();
            }
        }

        public Usuario UsuarioExist(string userName, string password)
        {
            AudioAppContext db = new AudioAppContext();
            Usuario retorno = new Usuario();

            retorno = (from u in db.Usuarios               
                       where (u.UserName == userName) && (u.Password == password)
                       select u).FirstOrDefault();
            return retorno;
        }

        public bool IsAdmin(int idUsuario)
        {
            AudioAppContext db = new AudioAppContext();
            var dato = (from ar in db.AsignacionRoles
                        where (ar.RolId == (int)Comun.Roles.Administrador) && (ar.UsuarioId == idUsuario)
                        select ar.RolId).FirstOrDefault();

            if (dato != 0)
                return true;
            else
                return false;
        }

        public bool TieneProyectos(int idProfesional)
        {
            AudioAppContext db = new AudioAppContext();
            var dato = (from ap in db.AsignacionProfesionales
                        join pro in db.Proyectos on ap.ProyectoId equals pro.ProyectoId
                        where (ap.ProfesionalId == idProfesional) && (pro.EstadoId == 1)
                        select ap.ProyectoId).FirstOrDefault();
            if (dato != 0)
                return true;
            else
                return false;

        }

        public UsuarioProfesional GetUsuarioProfesional(string userName, string password)
        {
            UsuarioProfesional iUsrPerson = new UsuarioProfesional();
            AudioAppContext db = new AudioAppContext();
            try
            {

                var iUsrPro = (from u in db.Usuarios
                               join pro in db.Profesionales on u.ProfesionalId equals pro.ProfesionalId
                               join p in db.Personas on pro.PersonaId equals p.PersonaId
                               join per in db.Perfiles on pro.PerfilId equals per.PerfilId
                               join ar in db.AsignacionRoles on u.UsuarioId equals ar.UsuarioId
                               join r in db.Roles on ar.RolId equals r.RolId
                               where (u.UserName == userName) && (u.Password == password)
                               select new
                               {
                                   UsuarioId = u.UsuarioId,
                                   ProfesionalId = pro.ProfesionalId,
                                   PersonaId = p.PersonaId,
                                   UserName = u.UserName,
                                   NombresApellidos = p.PrimerNombre + " " + p.SegundoNombre + " " + p.PrimerApellido + " " + p.SegundoApellido,
                                   DescripcionPerfil = per.Descripcion,
                                   Rol = r.Codigo,
                                   RolId = r.RolId
                               }).FirstOrDefault();

                if (iUsrPro == null)
                {
                    var liUsuario = db.Usuarios.Where(x => x.UserName == userName && x.Password == password).FirstOrDefault();
                    if (liUsuario != null && liUsuario.ProfesionalId == null)
                    {
                        iUsrPerson.UsuarioId = liUsuario.UsuarioId;
                        iUsrPerson.ProfesionalId = -1;
                        iUsrPerson.PersonaId = -1;
                        iUsrPerson.UserName = liUsuario.UserName;
                        iUsrPerson.NombresApellidos = "Administrador";
                        iUsrPerson.Perfil = "Administrador";
                        iUsrPerson.Rol = "ADM001";
                        iUsrPerson.RolId = 1;
                    }
                }
                else
                {
                    iUsrPerson.UsuarioId = iUsrPro.UsuarioId;
                    iUsrPerson.ProfesionalId = iUsrPro.ProfesionalId;
                    iUsrPerson.PersonaId = iUsrPro.PersonaId;
                    iUsrPerson.UserName = iUsrPro.UserName;
                    iUsrPerson.NombresApellidos = iUsrPro.NombresApellidos;
                    iUsrPerson.Perfil = iUsrPro.DescripcionPerfil;
                    iUsrPerson.Rol = iUsrPro.Rol;
                    iUsrPerson.RolId = iUsrPro.RolId;
                }
            }
            catch (Exception ex)
            {
                ///Implementar logger para excepciones
            }
            finally
            {
                db.Dispose();
            }

            return iUsrPerson;
        }

        public List<UsuarioProfesional> ListProfesional()
        {
            UsuarioProfesional iUsrPerson = new UsuarioProfesional();
            List<UsuarioProfesional> lUsrPerson = new List<UsuarioProfesional>();
            db = new AudioAppContext();

            try
            {
                var iUsrPro = (from pro in db.Profesionales
                               join p in db.Personas on pro.PersonaId equals p.PersonaId
                               where (pro.EstadoId == (int)Comun.EstadoRegistro.Activo)
                               select new
                               {
                                   ProfesionalId = pro.ProfesionalId,
                                   NombresApellidos = p.PrimerNombre + " " + p.SegundoNombre + " " + p.PrimerApellido + " " + p.SegundoApellido
                               }).ToList();

                for (int i = 0; i < iUsrPro.Count; i++)
                {
                    iUsrPerson = new UsuarioProfesional();
                    iUsrPerson.ProfesionalId = iUsrPro[i].ProfesionalId;
                    iUsrPerson.NombresApellidos = iUsrPro[i].NombresApellidos;
                    lUsrPerson.Add(iUsrPerson);
                }

                return lUsrPerson;
            }
            catch (Exception)
            {

                throw;
            }
            finally
            {
                db.Dispose();
            }
        }

        public List<Proyecto> ListProyectos()
        {
            try
            {
                db = new AudioAppContext();
                return db.Proyectos.Where(x => x.EstadoId == (int)Comun.EstadoRegistro.Activo).ToList();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                db.Dispose();
            }
        }

        public List<Rol> ListRoles()
        {
            try
            {
                db = new AudioAppContext();
                return db.Roles.Where(x => x.EstadoId == (int)Comun.EstadoRegistro.Activo).ToList();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                db.Dispose();
            }
        }
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
