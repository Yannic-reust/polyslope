import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import TabBar from "./components/TabBar/TabBar";
import AnimationsBadge from "./components/AnimationsBadge/AnimationsBadge";
import AnimationsStatus from "./components/AnimationsStatus/AnimationsStatus";

function App() {
  return (
    <>
      <div className="relative h-screen ">
        <SideBar />
        <TabBar />

        <div className="absolute bottom-8  w-full flex items-center">
          <div className="ml-8">
            <AnimationsBadge />
          </div>
          <div className=" absolute left-1/2 transform -translate-x-1/2 ">
            <AnimationsStatus />
          </div>
        </div>

        {/* <Experience /> */}
      </div>
    </>
  );
}

export default App;
