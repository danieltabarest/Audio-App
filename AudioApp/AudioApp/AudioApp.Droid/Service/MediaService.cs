﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Android;
using Android.App;
using Android.Content;
using Android.Content.PM;
using Android.OS;
using Android.Support.V4.Content;
using Android.Widget;
using Plugin.CurrentActivity;
using Plugin.Permissions;
using Plugin.Permissions.Abstractions;
using Xamarin.Forms;
using AudioApp.Droid;
using AudioApp.Services;

[assembly: Xamarin.Forms.Dependency(typeof(MediaService))]
namespace AudioApp.Droid
{
    public class MediaService : Java.Lang.Object, IMediaService
    {
        public async Task OpenGallery()
        {
            try
            {
                var status = await CrossPermissions.Current.CheckPermissionStatusAsync(Plugin.Permissions.Abstractions.Permission.Storage);
                if (status != PermissionStatus.Granted)
                {
                    if (await CrossPermissions.Current.ShouldShowRequestPermissionRationaleAsync(Plugin.Permissions.Abstractions.Permission.Storage))
                    {
                        Toast.MakeText(Xamarin.Forms.Forms.Context, "Need Storage permission to access to your photos.", ToastLength.Long).Show();
                    }

                    var results = await CrossPermissions.Current.RequestPermissionsAsync(new[] { Plugin.Permissions.Abstractions.Permission.Storage });
                    status = results[Plugin.Permissions.Abstractions.Permission.Storage];
                }

                if (status == PermissionStatus.Granted)
                {
                    Toast.MakeText(Xamarin.Forms.Forms.Context, "Select max 20 images", ToastLength.Long).Show();
                    var imageIntent = new Intent(
                        Intent.ActionPick);
                    imageIntent.SetType("image/*");
                    imageIntent.PutExtra(Intent.ExtraAllowMultiple, true);
                    imageIntent.SetAction(Intent.ActionGetContent);
                    ((Activity)Forms.Context).StartActivityForResult(
                        Intent.CreateChooser(imageIntent, "Select photo"), MainActivity.OPENGALLERYCODE);

                }
                else if (status != PermissionStatus.Unknown)
                {
                    Toast.MakeText(Xamarin.Forms.Forms.Context, "Permission Denied. Can not continue, try again.", ToastLength.Long).Show();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                Toast.MakeText(Xamarin.Forms.Forms.Context, "Error. Can not continue, try again.", ToastLength.Long).Show();
            }
        }

        void IMediaService.ClearFiles(List<string> filePaths)
        {
            var documentsDirectory = System.Environment.GetFolderPath
                              (System.Environment.SpecialFolder.Personal);

            if (Directory.Exists(documentsDirectory))
            {
                foreach (var p in filePaths)
                {
                    File.Delete(p);
                }
            }
        }

    }

}
