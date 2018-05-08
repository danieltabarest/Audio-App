using Acr.UserDialogs;
using AudioApp.Helpers;
using AudioApp.Models;
using AudioApp.Services;
using System;
using System.ComponentModel;
using Xamarin.Forms;

namespace AudioApp.ViewModels
{
    public class BaseViewModel : ObservableObject, INotifyPropertyChanged
    {
        //public abstract string PageTitle { get; }

        private bool _isBusy;
        public bool IsBusy
        {
            get
            {
                return _isBusy;
            }

            set
            {
                _isBusy = value;
                Device.BeginInvokeOnMainThread(() =>
                {
                    //if (value)
                    //    UserDialogs.Instance.ShowLoading("Cargando..", MaskType.Gradient);
                    //else
                    //    UserDialogs.Instance.HideLoading();
                });

            }
        }

        private bool _isEmpty;
        public bool IsEmpty
        {
            get
            {
                return _isEmpty;
            }

            set
            {
                _isEmpty = value;
            }
        }


        protected void SendNotification<TSender>(string notificationKey, TSender arg) where TSender : class
        {
            MessagingCenter.Send<TSender>(arg, notificationKey);
        }

        protected void SubscribeToNotification<TSender>(object subscriber, string notificationKey, Action<TSender> callback) where TSender : class
        {
            MessagingCenter.Subscribe<TSender>(subscriber, notificationKey, callback);
        }




        /// <summary>
        /// Get the azure service instance
        /// </summary>
        //public IDataStore<Item> DataStore => DependencyService.Get<IDataStore<Item>>();

        //bool isBusy = false;
        //public bool IsBusy
        //{
        //    get { return isBusy; }
        //    set { SetProperty(ref isBusy, value); }
        //}
        /// <summary>
        /// Private backing field to hold the title
        /// </summary>
        string title = string.Empty;
        /// <summary>
        /// Public property to set and get the title of the item
        /// </summary>
        public string Title
        {
            get { return title; }
            set { SetProperty(ref title, value); }
        }

        string subtitle = string.Empty;
        public string SubTitle
        {
            get { return subtitle; }
            set { SetProperty(ref subtitle, value); }
        }
    }
}

