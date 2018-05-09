using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Linq;
using System.Text;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json.Converters;
using AudioApp.Models;
using System.Collections.Generic;
using AudioApp.Helpers;

namespace AudioApp.Services
{
    public class SynchronizationService
    {
        private string _encodedCredentials;
        static string Token { get; set; }
        private readonly JsonSerializerSettings _serializerSettings;

        //public ISingleObjectCacheRepository<Usuario> _UsuariosRepository;
        //public ISingleObjectCacheRepository<Anexo> _AnexosRepository;


        private readonly AuthenticationService authenticationService;
        private readonly ApiService apiService;
        public SynchronizationService()
        {
            _serializerSettings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                DateTimeZoneHandling = DateTimeZoneHandling.Utc,
                NullValueHandling = NullValueHandling.Ignore
            };
            _serializerSettings.Converters.Add(new StringEnumConverter());

            apiService = new ApiService();

        }


        public async Task<bool> SynchronizationUploadToWebAsync(ObservableRangeCollection<Anexo> Items)
        {


            Response res = new Response();
            int errors = 0;

            List<object> rowuploadtodelete = new List<object>();
            Dictionary<string, string> namefails = new Dictionary<string, string>();
            Dictionary<string, string> Jsons = new Dictionary<string, string>();


            // Anexos
            try
            {
                var resultuploadAnexo = Items;

                if (resultuploadAnexo.Count() > 0)
                {

                    //Send entities
                    res = await apiService.Post<Anexo>("/api/AGM/", "Sincronizacion/SetAnexosADO", authenticationService.tokenResponse.TokenType, authenticationService.tokenResponse.AccessToken, resultuploadAnexo);
                    List<Anexo> _list = (List<Anexo>)res.Result;
                    if (_list.Count > 0)
                    {
                        rowuploadtodelete.Add(_list);
                    }

                    JsonSerializerSettings _serializerSettings = new JsonSerializerSettings
                    {
                        ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                    };
                    //Send files
                    foreach (var item in resultuploadAnexo)
                    {

                        if (Jsons.ContainsKey(item.ID) == false)
                            Jsons.Add(item.ID, JsonConvert.SerializeObject(item, _serializerSettings));

                        var file = await GetResourceBDAsync(item.Path);
                        if (file != null)
                        {
                            res = await apiService.PostAttachAsync<Anexo>("/api/", "DocumentUpload/UploadFileAnexos", authenticationService.tokenResponse.TokenType, authenticationService.tokenResponse.AccessToken, file, item);
                            if (!res.IsSuccess)
                            {
                                errors++;
                                namefails.Add("AnexosRepository", res.Message);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                errors++;
                if (namefails.ContainsKey("AnexosRepository") == false)
                    namefails.Add("AnexosRepository", ex.Message + ex.InnerException + ex.StackTrace + res.Message);
            }

            bool result = (errors == 0) ? true : false;

            return await Task.FromResult<bool>(result);

        }


        protected async Task<byte[]> GetResourceBDAsync(string namefile)
        {
            try
            {
                bool isexist = await PCLHelper.IsFileExistAsync(namefile);
                if (isexist)
                {
                    return await PCLHelper.LoadImage(namefile);
                }
                return null;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        protected async Task<bool> CreateResourceFileJson(Dictionary<string, string> jsons)
        {
            try
            {
                foreach (var item in jsons)
                {
                    await Xamarin.Forms.DependencyService.Get<IFileHelper>().CreateDirectory(item.Key, item.Value);
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }


    }
}
