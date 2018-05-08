using System;
using System.Collections.Generic;
using System.Text;

namespace AudioApp.Forms
{
    public interface IAudioPlayer
    {
        void Play(string pathToAudioFile);
        event EventHandler FinishedPlaying;
        void Pause();
        void Play();
    }
}