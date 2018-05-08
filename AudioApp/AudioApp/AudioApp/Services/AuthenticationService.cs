using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json.Converters;
using AudioApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace AudioApp.Services
{
    public class AuthenticationService 
    {
        private string _encodedCredentials;
        //private readonly ISingleObjectCacheRepository<Usuario> _UsuariosRepository;
        
        public string _username;
        private string _password;
        static string Token { get; set; }
        //private readonly IAPIContext _apiContext;
        private readonly JsonSerializerSettings _serializerSettings;
        public AuthenticationService() 
        {
            _serializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                DateTimeZoneHandling = DateTimeZoneHandling.Utc,
                NullValueHandling = NullValueHandling.Ignore
            };
            _serializerSettings.Converters.Add(new StringEnumConverter());

            //_UsuariosRepository = App.Instance._UsuariosRepository;
            //_RolesRepository = App.Instance._RolesRepository;
            //_PerfilesRepository = App.Instance._PerfilesRepository;
            //_PersonasRepository = App.Instance._PersonasRepository;
            //_AsignacionRolesRepository = App.Instance._AsignacionRolesRepository;
            //_AsignacionProfesionalesRepository = App.Instance._AsignacionProfesionalesRepository;
            //_ProfesionalesRepository = App.Instance._ProfesionalesRepository;
            //_ProyectosRepository = App.Instance._ProyectosRepository;
        }


        //public string Username { get { return _userAccountRepository.Retrieve()?.Username ?? string.Empty; } set { _username = value; } }
        //public string Company { get { return _userAccountRepository.Retrieve()?.Company ?? string.Empty; } set { _company = value; } }
        
        public TokenResponse tokenResponse { get; set; }

        //public string SavedUsername => _userAccountRepository.Retrieve()?.Username ?? string.Empty;

        public async Task<TokenResponse> GetToken(string urlBase, string username, string password)
        {
            try
            {
                var client = new HttpClient();
                client.BaseAddress = new Uri(urlBase + "token");
                var response = await client.PostAsync("Token",
                    new StringContent(string.Format("grant_type=password&username={0}&password={1}", username, password),
                    Encoding.UTF8, "application/x-www-form-urlencoded"));
                var resultJSON = await response.Content.ReadAsStringAsync();
                tokenResponse = JsonConvert.DeserializeObject<TokenResponse>(resultJSON);
                return tokenResponse;
            }
            catch (Exception e)
            {
                var message = e.Message;
                return null;
            }
        }
        public async Task<bool> AuthenticateAsync(string username, string password)
        {
            var responseData = string.Empty;
            var success = false;
            _username = username;
            _password = password;
            _encodedCredentials = EncodeCredentials(username, password);
            try
            {
                string sUrl = App.Instance.urlBase + "api/AGM/Authentication/GetAuthentication";
                string sContentType = "application/json"; 
                JObject oJsonObject = new JObject();
                oJsonObject.Add("username", username);
                oJsonObject.Add("password", password);
                HttpClient oHttpClient = new HttpClient();
                var oTaskPostAsync = await oHttpClient.PostAsync(sUrl, new StringContent(oJsonObject.ToString(), Encoding.UTF8, sContentType));
                responseData = await oTaskPostAsync.Content.ReadAsStringAsync();
                var user = JsonConvert.DeserializeObject<Usuario>(responseData, _serializerSettings);
                App.User = user;
                if (oTaskPostAsync.StatusCode == System.Net.HttpStatusCode.OK)
                {                  
                        success = (user != null)? true : false;                
                                   
                }
                else
                {
                    throw new Exception(oTaskPostAsync.ReasonPhrase);
                }
            }
            catch (Exception ex)
            {
                // Log exception.
                throw new Exception("Something went wrong while attempting to authenticate. Please contact the system administrator.", ex);
            }
            return success;
        }
        public async Task<int> AuthenticateLocalAsync(string username, string password)
        {
            int activo = 1;
            int CountProyectos = 0;
            var success = 0;
            _username = username;
            _password = password;
        
            try
            {
                /*var users = await _UsuariosRepository.RetrieveList();
                var user = users.Where(x => x.UserName == username && x.Password == password && x.EstadoId == activo).FirstOrDefault();
               
                if (user != null)
                {
                    var asignacionRoles = await _AsignacionRolesRepository.RetrieveList();
                    asignacionRoles = asignacionRoles.Where(x => x.UsuarioId == user.UsuarioId).ToList();
                    var roles = await  _RolesRepository.RetrieveList();
                    user.Roles = asignacionRoles.Join(roles, ARol => ARol.RolId, Rol => Rol.RolId, (ARol, Rol) => Rol).ToList();
                    if (user.Roles != null)
                    {
                        if (user.Roles.Count > 0)
                        {
                            if (user.ProfesionalId.HasValue)
                            {
                                var profesionales = await _ProfesionalesRepository.RetrieveList();
                                user.Profesional = profesionales.Where(x => x.ProfesionalId == user.ProfesionalId.Value).FirstOrDefault();

                                var personas = await _PersonasRepository.RetrieveList();
                                user.Profesional.Persona = personas.Where(x => x.PersonaId == user.Profesional.PersonaId).FirstOrDefault();
                                var perfiles = await _PerfilesRepository.RetrieveList();
                                user.Profesional.Perfil = perfiles.Where(x => x.PerfilId == user.Profesional.PerfilId).FirstOrDefault();
                                var asignacionProyectos = await _AsignacionProfesionalesRepository.RetrieveList();
                                var asignaciones = asignacionProyectos.Where(x => x.ProfesionalId == user.Profesional.ProfesionalId).ToList();                  
                                var proyectos = await _ProyectosRepository.RetrieveList();
                                user.Proyectos = proyectos.Join(asignaciones,(p)=>p.ProyectoId,(a)=>a.ProyectoId,(p,a)=>p).ToList();
                                user.ProyectoActivo = user.Proyectos.FirstOrDefault();
                                CountProyectos = asignacionProyectos.Count();
                            }

                            if (CountProyectos > 0)
                            {
                                App.User = user;
                                success = 1;
                            }
                            else
                            {
                                success = 2;
                            }
                        }
                        else
                        {
                            //sin roles el usuario
                            success = 3;
                        }
                    }
                    else
                    {
                        //sin roles el usuario
                        success = 3;
                    }


                }
                else
                {
                    success = 0;
                }*/
                
                    
          
            }
            catch (Exception ex)
            {
                // Log exception.
                throw new Exception("Something went wrong while attempting to authenticate. Please contact the system administrator.", ex);
            }
            return await Task.FromResult<int>(success);
        }
        

        public void Logout()
        {
            //_authenticator.Logout();
            _username = string.Empty;
        }

        public string GetToken()
        {
            return Token;
        }

        public string GetEncodedCredentials()
        {
            return _encodedCredentials ?? string.Empty;
        }

        public bool IsLoggedIn()
        {
            return false;
        }

        private string EncodeCredentials(string username, string password)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes($"{username}:{password}");
            return Convert.ToBase64String(plainTextBytes);
        }

      
    }
}
