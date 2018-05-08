using System;
using System.ComponentModel;
using System.Windows.Input;
using Xamarin.Forms;
using GalaSoft.MvvmLight.Command;
using Plugin.Connectivity;
using AudioApp.Services;
using AudioApp.Views;
using AudioApp;
using AudioApp.Models;
using AudioApp.ViewModels;
using System.Threading;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Acr.UserDialogs;

namespace AudioApp.ViewModels
{
    public class LoginViewModel : BaseViewModel, INotifyPropertyChanged
    {
        #region Attributes
        private readonly ApiService apiService;

        private readonly DialogService dialogService;

        private readonly NavigationService navigationService;

        private readonly AuthenticationService authenticationService;


        private string userName;

        private string password;

        private bool isRunning;

        private bool isEnabled;

        private bool isRemembered;

        #endregion

        #region Properties
        public string UserName
        {
            set
            {
                if (userName != value)
                {
                    userName = value;
                    PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("UserName"));
                }
            }
            get
            {
                return userName;
            }
        }

        public string Password
        {
            set
            {
                if (password != value)
                {
                    password = value;
                    PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("Password"));
                }
            }
            get
            {
                return password;
            }
        }

        public bool IsRunning
        {
            set
            {
                if (isRunning != value)
                {
                    isRunning = value;
                    PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("IsRunning"));
                }
            }
            get
            {
                return isRunning;
            }
        }

        public bool IsEnabled
        {
            set
            {
                if (isEnabled != value)
                {
                    isEnabled = value;
                    PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("IsEnabled"));
                }
            }
            get
            {
                return isEnabled;
            }
        }


        public bool IsRemembered
        {
            set
            {
                if (isRemembered != value)
                {
                    isRemembered = value;
                    PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("IsRemembered"));
                }
            }
            get
            {
                return isRemembered;
            }
        }
        #endregion



        private CancellationTokenSource _cancel;

        string errormessage;
        public string ErrorMessage
        {
            set
            {
                if (errormessage != value)
                {
                    errormessage = value;

                    if (PropertyChanged != null)
                    {
                        PropertyChanged(this, new PropertyChangedEventArgs("ErrorMessage"));
                    }
                }
            }
            get
            {
                return errormessage;
            }
        }


        string messageLogin = "";
        public string MessageLogin
        {
            set
            {
                if (messageLogin != value)
                {
                    messageLogin = value;

                    if (PropertyChanged != null)
                    {
                        PropertyChanged(this, new PropertyChangedEventArgs("MessageLogin"));
                    }
                }
            }
            get
            {
                return messageLogin;
            }
        }
        public bool RememberMe
        {
            get;
            set;
        }

        bool errorvisible;
        public bool ErrorVisible
        {
            set
            {
                if (errorvisible != value)
                {
                    errorvisible = value;

                    if (PropertyChanged != null)
                    {
                        PropertyChanged(this, new PropertyChangedEventArgs("ErrorVisible"));
                    }
                }
            }
            get
            {
                return errorvisible;
            }
        }



        bool isEnabledButton;
        public bool IsEnabledButton
        {
            set
            {
                if (isEnabledButton != value)
                {
                    isEnabledButton = value;

                    if (PropertyChanged != null)
                    {
                        PropertyChanged(this, new PropertyChangedEventArgs("IsEnabledButton"));
                    }
                }
            }
            get
            {
                return isEnabled;
            }
        }

        #region Events
        public event PropertyChangedEventHandler PropertyChanged;
        #endregion

        #region Constructors
        public LoginViewModel()
        {

            //apiService = App.Instance.apiService;
            //dialogService = App.Instance.dialogService;
            //navigationService = App.Instance.navigationService;
            //authenticationService = App.Instance.authenticationService;
            //synchronizationService = App.Instance.synchronizationService;

            IsRemembered = true;
            IsEnabled = true;
            UserName = null;
            Password = null;
        }


        #endregion

        #region Commands
        public ICommand LoginCommand { get { return new RelayCommand(Login); } }

        public ICommand RegisterCommand { get { return new RelayCommand(Register); } }



        private void Register()
        {
            navigationService.SetMainPage("NewUserPage");
        }
        public Command ValidateCommand
        {
            get
            {
                return new Command(() => Enable());
            }
        }
        private void Enable()
        {
            IsEnabledButton = (!string.IsNullOrWhiteSpace(UserName) && !string.IsNullOrWhiteSpace(Password));
        }
        private async void LoginExecute()
        {
            try
            {
                //UserDialogs.Instance.ShowLoading("Sincronizando ...", MaskType.Gradient);
                //await Login().ContinueWith((task) =>
                // { UserDialogs.Instance.HideLoading(); });
            }
            catch (Exception ex)
            {
            }
        }


        private async void Login()
        {
            try
            {
                //test daniel
                //var rootfolder = Android.OS.Environment.GetExternalStoragePublicDirectory(Android.OS.Environment.DirectoryDocuments);
                //var folder = Android.OS.Environment.GetExternalStoragePublicDirectory(Android.OS.Environment.DirectoryDocuments) + Java.IO.File.Separator + "JsonAGMFolder";
                /*var extFileName = folder + Java.IO.File.Separator +
                                       Guid.NewGuid() + ".txt";*/
                //await PCLHelper.WriteTextAllAsync(FileName, "prueba de guardado de files");
                //var FileName = Guid.NewGuid() + ".txt";
                //DependencyService.Get<IFileHelper>().CreateDirectory(FileName, "prueba de guardado de files");
                //                return;

                IsBusy = true;
                IsRunning = true;
                IsEnabled = false;
                bool isAuthenticated = false;

                if (string.IsNullOrEmpty(UserName))
                {
                    IsBusy = false;
                    await dialogService.ShowMessage("Error", "Debe introducir el usuario.");
                    return;
                }

                if (string.IsNullOrEmpty(Password))
                {
                    IsBusy = false;
                    await dialogService.ShowMessage("Error", "Debe introducir una contraseña.");
                    return;
                }



                if (App.Instance.IsConected())
                {
                    var token = await authenticationService.GetToken(App.Instance.urlBase, UserName, Password);

                    if (token == null)
                    {
                        IsRunning = false;
                        IsEnabled = true;
                        await dialogService.ShowMessage("Error", "El nombre de usuario o la contraseña están incorrectos.");
                        Password = null;
                        return;
                    }

                    if (string.IsNullOrEmpty(token.AccessToken))
                    {
                        IsRunning = false;
                        IsEnabled = true;
                        IsBusy = false;
                        await dialogService.ShowMessage("Error", token.ErrorDescription);
                        Password = null;
                        return;
                    }

                    isAuthenticated = await authenticationService.AuthenticateAsync(UserName, Password);

                    if (!isAuthenticated)
                    {
                        IsBusy = false;
                        ErrorMessage = "Credenciales incorrectas";
                        ErrorVisible = true;
                        return;
                    }

                    IsBusy = false;

                }
                else
                {
                    //if (lastSync.SincronizacionId == 0)
                    //{
                    //    IsBusy = false;
                    //    await dialogService.ShowMessage("Error", "Es necesario conectarse a internet para la configuracion inicial.");
                    //    return;
                    //}

                }


                var isSuccessLogin = await authenticationService.AuthenticateLocalAsync(UserName, Password);

                switch (isSuccessLogin)
                {
                    case 0:
                        IsBusy = false;
                        //await dialogService.ShowMessage("Error", "El usuario no existe en la base de datos local.");
                        return;
                    case 1:
                        UserName = null;
                        Password = null;
                        IsRunning = false;
                        IsEnabled = true;
                        IsBusy = false;
                        await navigationService.Navigate("ItemsPage");
                        return;
                    case 2:
                        IsBusy = false;
                        await dialogService.ShowMessage("Error", "El usuario no tiene campañas asignadas.");
                        return;

                    case 3:
                        IsBusy = false;
                        await dialogService.ShowMessage("Error", "El usuario no tiene roles asignados.");
                        return;
                }

            }
            catch (Exception ex)
            {
                IsBusy = false;
                await dialogService.ShowMessage("Error", "Se ha producido un error al recuperar la información del usuario, intente más tarde." + ex.Message);
            }
            finally
            {
                IsBusy = false;
                Device.BeginInvokeOnMainThread(() =>
                {
                    UserDialogs.Instance.HideLoading();
                });
                IsRunning = false;
                EnableLoginButton();
            }


        }

        private void EnableLoginButton()
        {
            IsEnabled = true;
        }

        private void ClearForm()
        {
            ErrorMessage = string.Empty;
            if (!RememberMe) UserName = string.Empty;
            Password = string.Empty;
        }


        #endregion

    }
}
