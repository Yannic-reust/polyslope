
import { Howl } from 'howler';

class AudioService {
  constructor() {
    this.sound = null;
  }

  initialize = (tracks) => {
    this.sound = new Howl({
      src: tracks,
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

  cleanup = () => {
    if (this.sound) {
      this.sound.unload();
    }
  };
}

const audioService = new AudioService();
export default audioService;