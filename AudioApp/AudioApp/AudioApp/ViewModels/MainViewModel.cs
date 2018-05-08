using System;
using System.Linq;
using Xamarin.Forms;
using System.Collections.ObjectModel;
using System.Windows.Input;
using System.Diagnostics;
using System.Collections.Generic;
using AudioApp.ViewModels;
using System.ComponentModel;
using AudioApp.Models;
using AudioApp.Services;
using AudioApp.Views;
using Plugin.Connectivity;

namespace AudioApp.ViewModels
{
    public class MainViewModel : INotifyPropertyChanged
    {
        #region Attributes
        private User currentUser;
        private ApiService apiService;
        private DialogService dialogService;
        private NavigationService navigationService;
        private bool isRefreshing = false;
        
        #endregion

        #region Properties
        public LoginViewModel Login { get; set; }

        //public SynchronizationViewModel SynchronizationViewModel { get;  set; }
        //public CampaignViewModel CampaignViewModel { get;  set; }
        public AuthenticationService AuthenticationService { get; set; }
        //public ObservableCollection<MenuItemViewModel> Menu { get; set; }
        

        public User CurrentUser
        {
            set
            {
                if (currentUser != value)
                {
                    currentUser = value;
                    PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("CurrentUser"));
                }
            }
            get
            {
                return currentUser;
            }
        }
        #endregion

        #region Constructor
        public MainViewModel()
        {
            //instance = this;
            //AuthenticationService = new AuthenticationService();
            //apiService = new ApiService();
            //dialogService = new DialogService();
            //navigationService = new NavigationService();
            //Login = new LoginViewModel();
            //LoadMenu();
        }
        #endregion

        #region Events
        public event PropertyChangedEventHandler PropertyChanged;
        #endregion

        #region Singleton
        private static MainViewModel instance;

        public static MainViewModel GetInstance()
        {
            if (instance == null)
            {
                instance = new MainViewModel();
            }

            return instance;
        }
        #endregion

        #region Methods


        public void SetCurrentUser(User user)
        {
            CurrentUser = user;
        }
        #endregion

        #region Methods

        private async void RefreshPoints()
        {
            if (!CrossConnectivity.Current.IsConnected)
            {
                return;
            }

            var isReachable = await CrossConnectivity.Current.IsRemoteReachable("google.com");
            if (!isReachable)
            {
                return;
            }

            isRefreshing = true;
 

        }


        #endregion

        #region Commands
        //public ICommand RefreshPointsCommand { get { return new RelayCommand(RefreshPoints); } }


        public void Refresh()
        {
            //IsRefreshing = true;
            //IsRefreshing = false;
        }

        internal void RegisterDevice()
        {
            throw new NotImplementedException();
        }
        #endregion
    }

}