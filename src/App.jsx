import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import TabBar from "./components/TabBar/TabBar";
import AnimationsStatus from "./components/AnimationsStatus/AnimationsStatus";
import Canvas from "./components/Canvas/Canvas";
import Tutorial from "./components/Tutorial/Tutorial";
import MusicBadge from "./components/MusicBadge/MusicBadge";
import useAPIData from "./services/useAPIData";
import audioService from "./services/audioService";
import { toggleVolume } from "./store/volume/volumeState";
import { useSelector, useDispatch } from "react-redux";

function App() {
  useAPIData();

  const dispatch = useDispatch();

  const musicStatus = useSelector((state) => state.music.value);

  if (musicStatus == true) {
    const tracks = ["./music/Calmness.mp3", "./music/SnowySilence.mp3"];
    audioService.initialize(tracks);
    audioService.play();
  } else {
    audioService.stop();
  }
  const mute = () => {
    dispatch(toggleVolume());
    audioService.mute();
  };

  return (
    <>
     <div
        className="ml-8 absolute tablet:bottom-8 top-8 tablet:top-auto right-8 tablet:right-auto"
        onClick={() => mute()}
      >
        <MusicBadge />
      </div>
      <SideBar />
      <TabBar />
      <Canvas />
     

      <Tutorial />

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 hidden tablet:inline">
        <AnimationsStatus />
      </div>
    </>
  );
}

export default App;
