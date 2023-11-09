import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import TabBar from "./components/TabBar/TabBar";
import Experience from "./components/Experience";
import StoreDemo from "./components/StoreDemo";


function App() {
  return (
    <>
      <SideBar />
      <TabBar />
      <StoreDemo />
      <Experience />
    </>
  );
}

export default App;
