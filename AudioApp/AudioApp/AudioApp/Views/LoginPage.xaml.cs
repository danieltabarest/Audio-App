using AudioApp.ViewModels;
using System;
using Xamarin.Forms;

namespace AudioApp.Views
{
    public partial class LoginPage : ContentPage
    {
        public LoginPage()
        {
            try
            {
                InitializeComponent();
                BindingContext = new LoginViewModel();
            }
            catch (System.Exception ex)
            {

            }

        }

    }
  
}
