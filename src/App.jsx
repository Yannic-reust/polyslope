import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import TabBar from "./components/TabBar/TabBar";
import Experience from "./components/Experience";


function App() {
  return (
    <>
      <SideBar className="visible" />
      <TabBar className="hidden" />
      <Experience />
    </>
  );
}

export default App;
