import "./App.css";
import AnimationsStatus from "./components/AnimationsStatus/AnimationsStatus";
import useAPIData from "./services/useAPIData";
import audioService from "./services/audioService";
import { toggleVolume } from "./store/volume/volumeState";
import { useSelector, useDispatch } from "react-redux";
import { Suspense, useState, lazy } from "react";
import Loading from "./components/Loading/Loading";

//lazy imports
const Canvas = lazy(() => import('./components/Canvas/Canvas'));
const SideBar = lazy(() => import('./components/SideBar/SideBar'));
const TabBar = lazy(() => import('./components/TabBar/TabBar'));
const Tutorial = lazy(() => import('./components/Tutorial/Tutorial'));
const MusicBadge = lazy(() => import('./components/MusicBadge/MusicBadge'));



function App() {
const [focusFromOutside, setFocusFromOutside] = useState("");



  useAPIData();

  const dispatch = useDispatch();

  const musicStatus = useSelector((state) => state.music.value);

  const mute = () => {
    dispatch(toggleVolume());
    audioService.mute();
  };

  return (
    <>
     <div
        className="absolute top-5 right-5 tablet:ml-8 tablet:bottom-8 tablet:top-auto tablet:right-auto"
        onClick={() => mute()}
        id="MusicBadge"
      >
        <MusicBadge />
      </div>

      <SideBar setFocusFromOutside={(obj) => setFocusFromOutside(obj)}/>
      <TabBar />
      <Canvas setFocusFromOutside={(obj) =>setFocusFromOutside(obj)} focusFromOutside={focusFromOutside} setLoading={(bool) => setLoading(bool)}/>

      {/* <Loading loading={loading} /> */}

    

     

      <Tutorial />

      {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 hidden tablet:inline">
        <AnimationsStatus />
      </div> 
      */}
    </>
  );
}

export default App;
