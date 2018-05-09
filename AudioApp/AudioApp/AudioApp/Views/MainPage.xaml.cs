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

namespace AudioApp.Views
{
    public partial class MainPage : ContentPage
    {
        AudioRecorderService recorder;
        IAudioPlayer player;
        //DependencyService.Get<IAudioPlayer> player;


        private MediaFile _mediaFile;

        public MainPage()
        {
            InitializeComponent();

            recorder = new AudioRecorderService
            {
                StopRecordingAfterTimeout = true,
                TotalAudioTimeout = TimeSpan.FromSeconds(15),
                AudioSilenceTimeout = TimeSpan.FromSeconds(2)
            };

            //player = new AudioPlayer();
            player = DependencyService.Get<IAudioPlayer>();
            player.FinishedPlaying += Player_FinishedPlaying;
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
                }
            }
            catch (Exception ex)
            {
                //blow up the app!
                throw ex;
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
                throw ex;
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

        public ObservableRangeCollection<Anexo> Items { get; set; }


        public async Task InsertAttachDB(string Path, string description)
        {
            try
            {
                var _anexo = new Anexo();
                string _Image;
                Guid id = Guid.NewGuid();
                var typefile = Path.Substring(Path.Length - 4);
                if (!typefile.Contains("jpg") && !typefile.Contains("png") && !typefile.Contains("mp4"))
                    typefile = ".jpg";
                if (typefile.Contains("mp4"))
                { _Image = "VideoIcon.png"; }
                else
                {
                    _Image = Path;
                }
                _anexo.AnexoId = 1; 
                _anexo.UPMId = 1;
                _anexo.ID = id.ToString();
                _anexo.Tipo = typefile;
                _anexo.VisitaId = 1;
                _anexo.Path = Path;
                _anexo.Image = _Image;
                _anexo.URL = String.Format("{0}{1}", id.ToString(), typefile);
                _anexo.Descripcion = description;
                _anexo.LugarTrabajoId = 1;
                _anexo.CodNivel = "1";
                _anexo.EstadoId = 1;
                _anexo.FechaCreacion = DateTime.Now;
                _anexo.UsuarioCreacion = App.User.UsuarioCreacion;
                _anexo.UsuarioModificacion = App.User.UsuarioModificacion;
                _anexo.FechaModificacion = App.User.FechaModificacion;
                 Items.Add(_anexo);
            }
            catch (Exception ex)
            {
            }
            finally { IsBusy = false; }
        }
    }
}
