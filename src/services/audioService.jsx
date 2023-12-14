
import { Howl } from 'howler';

class AudioService {
  constructor() {
    this.sound = null;
    this.muteSound = false;
  }

  initialize = (tracks) => {
    this.sound = new Howl({
      src: tracks,
      loop: true,
      // Other options like volume, loop, etc.
    });
  };

  play = () => {
    if (this.sound) {
      this.sound.play();
    }
  };

  pause = () => {
    if (this.sound) {
      this.sound.pause();
    }
  };

  stop = () => {
    if (this.sound) {
      this.sound.stop();
    }
  };
  mute = () => {
    if (this.sound) {
      this.sound.mute(!this.muteSound);
      this.muteSound = !this.muteSound
    }
  };

  cleanup = () => {
    if (this.sound) {
      this.sound.unload();
    }
  };
}

const audioService = new AudioService();
export default audioService;