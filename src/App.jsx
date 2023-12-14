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
import Loading from "./components/Loading/Loading";
import { useState } from "react";

function App() {
  useAPIData();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
        className="absolute top-5 right-5 tablet:ml-8 tablet:bottom-8 tablet:top-auto tablet:right-auto"
        onClick={() => mute()}
      >
        <MusicBadge />
      </div>
      <Loading loading={loading} />
      <SideBar />
      <TabBar />
      <Canvas setLoading={(bool) => setLoading(bool)}/>
     

      <Tutorial />

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 hidden tablet:inline">
        <AnimationsStatus />
      </div>
    </>
  );
}

export default App;
