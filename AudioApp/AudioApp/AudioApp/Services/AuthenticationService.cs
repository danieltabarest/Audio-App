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

        }

        public TokenResponse tokenResponse { get; set; }


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
