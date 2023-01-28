import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private sound: HTMLAudioElement;
  isPlaying: boolean = false;

  constructor() {
    this.sound = new Audio();
    this.sound.src = 'path/to/sound.mp3';
  }

  playSound() {
    if (!this.isPlaying) {
      this.sound.play();
      this.isPlaying = true;
    }
  }

  stopSound() {
    if (this.isPlaying) {
      this.sound.pause();
      this.sound.currentTime = 0;
      this.isPlaying = false;
    }
  }
}
