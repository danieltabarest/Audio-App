using System.Threading.Tasks;

namespace AudioApp.Services
{
    public class DialogService
    {
        public async Task ShowMessage(string title, string message)
        {
            await App.Current.MainPage.DisplayAlert(title, message, "ACEPTO");
        }

        public async Task<bool> ShowConfirm(string title, string message)
        {
            return await App.Current.MainPage.DisplayAlert(title, message, "SI", "NO");
        }
    }
}
