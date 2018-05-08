using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Plugin.Connectivity;
using Xamarin.Forms;
using AudioApp.Models;

namespace AudioApp
{
    public partial class App : Application
    {
        public static App Instance;
        public string urlBase { get; set; }
        public static Usuario User { get; internal set; }

        public App()
        {
            InitializeComponent();
            Instance = this;
            MainPage = new AudioApp.Views.MainPage();
        }

        public bool IsConected()
        {
            var isConected = false;
            var wifi = Plugin.Connectivity.Abstractions.ConnectionType.WiFi;
            var connectionTypes = CrossConnectivity.Current.ConnectionTypes;
            if (CrossConnectivity.Current.IsConnected)
            {
                // bool isReachable = CrossConnectivity.Current.IsRemoteReachable("google.com").Result;
                // if (isReachable)
                // {
                isConected = true;
                // }                        

                if (!connectionTypes.Contains(wifi))
                {
                    //Preguntar si desesar incurrir en costos
                    //   dialogService.ShowMessage("Warning", "Establecer una conexion a wifi para ");
                    isConected = false;
                }
            }

            return isConected;
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
