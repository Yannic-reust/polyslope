import "./App.css";
import { useDispatch } from "react-redux";
import { toggleAnimation } from "./store/animations/animationsState";
import SideBar from "./components/SideBar/SideBar";
import TabBar from "./components/TabBar/TabBar";
import AnimationsBadge from "./components/AnimationsBadge/AnimationsBadge";
import AnimationsStatus from "./components/AnimationsStatus/AnimationsStatus";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="relative h-screen ">
        <SideBar />
        <TabBar />

        <div
          className="ml-8 absolute bottom-8 hidden tablet:inline"
          onClick={() => dispatch(toggleAnimation())}
        >
          <AnimationsBadge />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8">
          <AnimationsStatus />
        </div>

        {/* <Experience /> */}
      </div>
    </>
  );
}

export default App;
