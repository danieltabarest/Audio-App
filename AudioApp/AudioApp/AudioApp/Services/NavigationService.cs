using AudioApp.ViewModels;
using AudioApp.Models;
using AudioApp.Views;
using System.Threading.Tasks;
using Xamarin.Forms;
using Acr.UserDialogs;

namespace AudioApp.Services
{
    public class NavigationService
    {
        #region Attributes
        #endregion

        #region Constructors
        public NavigationService()
        {
        }
        #endregion

        #region Methods

        public async Task Navigate(string pageName)
        {
            var mainViewModel = MainViewModel.GetInstance();

            switch (pageName)
            {

                case "AttachmentsPage":
                    //await App.Navigator.PushAsync(new AttachmentsPage());
                    break;
                case "Cerrar Sesión":
                    await App.Navigator.PushAsync(new LoginPage());
                    break;
                case "ResetData":
 
                    break;
                default:
                    break;
            }
        }

        public void SetMainPage(string pageName)
        {
            switch (pageName)
            {
                case "MasterPage":
                    //App.Current.MainPage = new MasterPage();
                    break;
                case "LoginPage":
                    //Logout();
                    App.Current.MainPage = new LoginPage();
                    break;
                default:
                    break;
            }
        }

     

        public async Task Back()
        {
            await App.Navigator.PopAsync();
        }

        public async Task Clear()
        {
            await App.Navigator.PopToRootAsync();
        }
        #endregion
    }
}
