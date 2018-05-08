using Newtonsoft.Json;
using AudioApp.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using AudioApp.Helpers;

namespace AudioApp.Services
{
    public interface IMediaService
    {
        Task OpenGallery();
        void ClearFiles(List<string> filePaths);
    }
}
