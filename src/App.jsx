import "./App.css";
import { useDispatch } from "react-redux";
import { toggleAnimation } from "./store/animations/animationsState";
import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import TabBar from "./components/TabBar/TabBar";
import AnimationsBadge from "./components/AnimationsBadge/AnimationsBadge";
import AnimationsStatus from "./components/AnimationsStatus/AnimationsStatus";
import Canvas from "./components/Canvas/Canvas";
import Loading from "./components/Loading/Loading";


function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  return (
    <>
        <Loading loading={loading} />
        <SideBar />
        <TabBar />
        <Canvas setLoading={(bool) => setLoading(bool)} />

        <div
          className="ml-8 absolute bottom-8 hidden tablet:inline"
          onClick={() => dispatch(toggleAnimation())}
        >
          <AnimationsBadge />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 hidden tablet:inline">
          <AnimationsStatus />
        </div>
    </>
  );
}

export default App;
