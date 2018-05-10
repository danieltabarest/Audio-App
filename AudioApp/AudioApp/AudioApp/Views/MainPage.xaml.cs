using System;
using System.Net.Http;
using System.Threading.Tasks;
using Plugin.Media;
using Plugin.Media.Abstractions;
using Xamarin.Forms;
using Plugin.AudioRecorder;
using AudioApp.Forms;
using AudioApp.Helpers;
using AudioApp.Models;
using AudioApp.Services;

namespace AudioApp.Views
{
    public partial class MainPage : ContentPage
    {
        AudioRecorderService recorder;
        IAudioPlayer player;
        //DependencyService.Get<IAudioPlayer> player;
        SynchronizationService synchronizationService;

        private MediaFile _mediaFile;

        public MainPage()
        {
            InitializeComponent();

            this.BindingContext = this;
            synchronizationService = new SynchronizationService();
            recorder = new AudioRecorderService
            {
                StopRecordingAfterTimeout = true,
                TotalAudioTimeout = TimeSpan.FromSeconds(15),
                AudioSilenceTimeout = TimeSpan.FromSeconds(2)
            };

            //player = new AudioPlayer();
            player = DependencyService.Get<IAudioPlayer>();
            player.FinishedPlaying += Player_FinishedPlaying;
            recorder.AudioInputReceived += _recoder_AudioInputReceived;
        }

        async void Record_Clicked(object sender, EventArgs e)
        {
            await RecordAudio();
        }


        async Task RecordAudio()
        {
            try
            {
                if (!recorder.IsRecording) //Record button clicked
                {
                    recorder.StopRecordingOnSilence = TimeoutSwitch.IsToggled;

                    RecordButton.IsEnabled = false;
                    PlayButton.IsEnabled = false;

                    //start recording audio
                    var audioRecordTask = await recorder.StartRecording();

                    RecordButton.Text = "Stop Recording";
                    RecordButton.IsEnabled = true;

                    await audioRecordTask;

                    RecordButton.Text = "Record";
                    PlayButton.IsEnabled = true;
                }
                else //Stop button clicked
                {
                    RecordButton.IsEnabled = false;

                    //stop the recording...
                    await recorder.StopRecording();

                    RecordButton.IsEnabled = true;

                    var filePath = recorder.GetAudioFilePath();

                    if (filePath != null)
                    {
                        InsertAttachDB(filePath, filePath);
                    }
                }

            }
            catch (Exception ex)
            {
                //blow up the app!
                // throw ex;
            }
        }


        void Play_Clicked(object sender, EventArgs e)
        {
            PlayAudio();
        }


        void PlayAudio()
        {
            try
            {
                var filePath = recorder.GetAudioFilePath();

                if (filePath != null)
                {
                    PlayButton.IsEnabled = false;
                    RecordButton.IsEnabled = false;

                    player.Play(filePath);
                }
            }
            catch (Exception ex)
            {
                //blow up the app!
                // throw ex;
            }
        }


        void Player_FinishedPlaying(object sender, EventArgs e)
        {
            PlayButton.IsEnabled = true;
            RecordButton.IsEnabled = true;
        }

        private async void PickPhoto_Clicked(object sender, EventArgs e)
        {
            await CrossMedia.Current.Initialize();

            if (!CrossMedia.Current.IsPickPhotoSupported)
            {
                await DisplayAlert("No PickPhoto", ":( No PickPhoto available.", "OK");
                return;
            }

            _mediaFile = await CrossMedia.Current.PickPhotoAsync();

            if (_mediaFile == null)
                return;

            LocalPathLabel.Text = _mediaFile.Path;

            FileImage.Source = ImageSource.FromStream(() =>
            {
                return _mediaFile.GetStream();
            });
        }

        private async void TakePhoto_Clicked(object sender, EventArgs e)
        {
            await CrossMedia.Current.Initialize();

            if (!CrossMedia.Current.IsCameraAvailable || !CrossMedia.Current.IsTakePhotoSupported)
            {
                await DisplayAlert("No Camera", ":( No camera available.", "OK");
                return;
            }

            _mediaFile = await CrossMedia.Current.TakePhotoAsync(new StoreCameraMediaOptions
            {
                Directory = "Sample",
                Name = "myImage.jpg"
            });

            if (_mediaFile == null)
                return;

            LocalPathLabel.Text = _mediaFile.Path;

            FileImage.Source = ImageSource.FromStream(() =>
            {
                return _mediaFile.GetStream();
            });
        }

        private async void UploadFile_Clicked(object sender, EventArgs e)
        {
            try
            {
                if (_mediaFile != null)
                {
                    await PushApiFile();
                }

                var result = await synchronizationService.SynchronizationUploadToWebAsync(Items);

                if (result)
                {
                    RemotePathLabel.Text = "Audio OK";
                }
            }
            catch (Exception ex)
            {

            }
        }

        private async Task PushApiFile()
        {
            var content = new MultipartFormDataContent();

            content.Add(new StreamContent(_mediaFile.GetStream()),
                "\"file\"",
                $"\"{_mediaFile.Path}\"");

            var httpClient = new HttpClient();

            var uploadServiceBaseAddress = "http://localhost:12214/api/Files/Upload";
            //"http://AudioApp.azurewebsites.net/api/Files/Upload";
            //"http://localhost:12214/api/Files/Upload";

            var httpResponseMessage = await httpClient.PostAsync(uploadServiceBaseAddress, content);

            RemotePathLabel.Text = await httpResponseMessage.Content.ReadAsStringAsync();
        }

        private async void _recoder_AudioInputReceived(object sender, string e)
        {
            try
            {
                var path = e;
                var file = await GetResourceBDAsync(path);
                var content = new MultipartFormDataContent();

                ByteArrayContent baContent = new ByteArrayContent(file);
                StringContent descriptioncontent = new StringContent("1");
                content.Add(baContent, "UploadedImage", path);

                //content.Add(new StreamContent(file),
                //    "\"file\"",
                //    $"\"{path}\"");

                var httpClient = new HttpClient();

                var uploadServiceBaseAddress = "http://localhost:12214/api/Files/Upload";
            
                var httpResponseMessage = await httpClient.PostAsync(uploadServiceBaseAddress, content);

                RemotePathLabel.Text = await httpResponseMessage.Content.ReadAsStringAsync();
            }
            catch (Exception ex)
            {
                RemotePathLabel.Text = ex.Message;
            }
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

        public ObservableRangeCollection<Anexo> Items { get; set; } = new ObservableRangeCollection<Anexo>();


        public async Task InsertAttachDB(string Path, string description)
        {
            try
            {
                var _anexo = new Anexo();
                string _Image;
                Guid id = Guid.NewGuid();
                _anexo.AnexoId = Items.Count + 1;
                _anexo.UPMId = 1;
                _anexo.ID = id.ToString();
                _anexo.Tipo = Path;
                _anexo.VisitaId = 1;
                _anexo.Path = Path;
                _anexo.URL = Path;
                _anexo.Descripcion = description;
                _anexo.LugarTrabajoId = 1;
                _anexo.CodNivel = "1";
                _anexo.EstadoId = 1;
                _anexo.FechaCreacion = DateTime.Now;
                _anexo.UsuarioCreacion = "test";
                _anexo.UsuarioModificacion = "test";
                _anexo.FechaModificacion = DateTime.Now; ;
                Items.Add(_anexo);

            }
            catch (Exception ex)
            {
                RemotePathLabel.Text = ex.Message;
            }
            finally { IsBusy = false; }
        }


    }
}
