using System;
using System.IO;
using Xamarin.Forms;
using AudioApp.Droid;
using Android.Graphics;
using Xamarin.Forms.Platform.Android;
using System.Threading.Tasks;
using System.Diagnostics;
using Android;
using PCLStorage;

[assembly: Dependency(typeof(FileHelper))]
namespace AudioApp.Droid
{
    public class FileHelper : IFileHelper
    {
        public string GetLocalFilePath(string filename)
        {
            string path = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
            return System.IO.Path.Combine(path, filename);
        }

        public string SaveFile(string fileName, byte[] imageStream)
        {
            string path = null;
            string imageFolderPath = System.IO.Path.Combine(System.Environment.GetFolderPath(Environment.SpecialFolder.Personal), "ProductImages");

            //Check if the folder exist or not
            if (!System.IO.Directory.Exists(imageFolderPath))
            {
                System.IO.Directory.CreateDirectory(imageFolderPath);
            }
            string imagefilePath = System.IO.Path.Combine(imageFolderPath, fileName);

            //Try to write the file bytes to the specified location.
            try
            {
                System.IO.File.WriteAllBytes(imagefilePath, imageStream);

                path = imagefilePath;
            }
            catch (System.Exception e)
            {
                throw e;
            }
            return path;
        }


        public async Task<bool> CreateDirectory(string filename, string content = "")
        {
            try
            {
                var externalFolder = System.IO.Path.Combine(Android.OS.Environment.ExternalStorageDirectory.Path, "Android", "data", "com.Ministerio.AudioApp", "files");
                if (!Directory.Exists(externalFolder))
                    CreateFolderStructure();

                var filePath = System.IO.Path.Combine(externalFolder, filename);
                if (!System.IO.File.Exists(filePath))
                {
                    using (System.IO.StreamWriter write = new System.IO.StreamWriter(filePath, true))
                    {
                        write.Write(content);
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        private async void CreateFolderStructure()
        {
            try
            {
                IFolder rootFolder = await FileSystem.Current.GetFolderFromPathAsync(System.IO.Path.Combine(Android.OS.Environment.ExternalStorageDirectory.Path));
                var subpaths = new[] { "Android", "data", "com.Ministerio.AudioApp", "files" };
                foreach (var dir in subpaths)
                {
                    if (!string.IsNullOrEmpty(dir))
                        rootFolder = await rootFolder.CreateFolderAsync(dir, CreationCollisionOption.OpenIfExists);
                }

            }
            catch (Exception e)
            {
                Console.WriteLine("Failed to log! " + e.Message);
            }
        }

        public void DeleteDirectory()
        {
            string imageFolderPath = System.IO.Path.Combine(System.Environment.GetFolderPath(Environment.SpecialFolder.Personal), "ProductImages");
            if (System.IO.Directory.Exists(imageFolderPath))
            {
                System.IO.Directory.Delete(imageFolderPath, true);
            }
        }

        public string GetPictureFromDisk(/*int Id*/)
        {

            var documentsDirectory = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
            string jpgFilename = System.IO.Path.Combine(documentsDirectory, "ProductImages");

            return jpgFilename;
        }

        public string GetPictureFromDisk(string imagename)
        {
            var documentsDirectory = Environment.GetFolderPath
                (Environment.SpecialFolder.Personal);
            string jpgFilename = System.IO.Path.Combine(documentsDirectory, imagename + ".png");
            return jpgFilename;
        }

        public void SavePictureToDisk(ImageSource imgSrc, string imagename)
        {
            throw new NotImplementedException();
        }


        //public async void SavePictureToDisk(ImageSource imgSrc, string photoname)
        //{
        //    try
        //    {
        //        var renderer = new StreamImagesourceHandler();
        //        var photo = await renderer.LoadImageAsync(imgSrc, Forms.Context);
        //        var documentsDirectory = System.Environment.GetFolderPath(Environment.SpecialFolder.Personal);
        //        string pngFilename = System.IO.Path.Combine(documentsDirectory, photoname + ".png");
        //        using (FileStream fs = new FileStream(pngFilename, FileMode.OpenOrCreate))
        //        {
        //            photo.Compress(Bitmap.CompressFormat.Png, 100, fs);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        string exMessageString = ex.Message;
        //    }
        //}


    }
}
