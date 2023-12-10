import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import TabBar from "./components/TabBar/TabBar";
import AnimationsStatus from "./components/AnimationsStatus/AnimationsStatus";
import Canvas from "./components/Canvas/Canvas";
import Tutorial from "./components/Tutorial/Tutorial";



function App() {

  return (
    <>
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
