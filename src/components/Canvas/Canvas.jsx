import { Canvas as R3fCanvas } from "@react-three/fiber";
import { CameraControls, Detailed } from "@react-three/drei";
import { useRef, useState } from "react";

//component imports
import SetUpControls from "./SetUpControls";
import Light from "./Light";
import LandscapeLow from "../Landscapes/LandscapeLow";
import LandscapeHigh from "../Landscapes/LandscapeHigh";
import LandscapeMed from "../Landscapes/LandscapeMed";
import Trees from "../Models/Trees";
import Restaurants from "../Models/Restaurants";
import Lifts from "../Models/Lifts";
import Slopes from "../Models/Slopes";

import EasterEgg from "../Models/EasterEgg";
import FocusOnObject from "./FocusOnObject";
import Loading from "./Loading";
import Huts from "../Models/Huts";
import SnowFlakes from "./Snowflakes";

//stores initial camera position to reset camera after focusing on an object
const initialCameraPos = {
  x: 4000,
  y: 7000,
  z: 0,
  targetX: 0,
  targetY: 0,
  targetZ: -650,
};

const Canvas = ({ focusFromOutside, setLoading,setFocusFromOutside }) => {
  //shadow settings
  const allowShadow = {
    trees: true,
    buildings: true,
    landscape: true,
  };

  //focusObject, accepts ref of an element
  const [focusObject, setFocusObject] = useState(null);
  //focusFromOutside probably have to hardcode a refrence from the buildings and lifts ref to a sting

  //if focus object already applied, remove focus object
  function changeFocusObject(obj) {
    if (obj == focusObject) {
      setFocusObject(null);
    } else {
      setFocusObject(obj);
    }
  }

  //refs
  const controlerRef = useRef();
  const restaurantRefs = [];
  for (let i = 0; i < 9; i++) {
    restaurantRefs.push(useRef());
  }
  const liftRefs = [];
  for (let i = 0; i < 19; i++) {
    liftRefs.push(useRef());
  }
  const slopesRefs = [];
  for (let i = 0; i < 29; i++) {
    slopesRefs.push(useRef());
  }
  const refList = {
    restaurants: restaurantRefs,
    lifts: liftRefs,
    slopes: slopesRefs,
  };

  return (
    <div className="absolute canvas-container h-screen w-screen bg-darkblue z-[-1]">
      <R3fCanvas
        camera={{
          near: 5, // stops flickering when viewed from distance
          far: 50000,
          minDistance: 0,
          maxDistance: 20000,
          position: [
            initialCameraPos.x,
            initialCameraPos.y,
            initialCameraPos.z,
          ],
        }}
        shadows
      >

        <CameraControls
          ref={controlerRef}
          minDistance={1000}
          maxDistance={10000}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.45}
          target={[0, 0, -637.425]} // changed y position since scene is not in center
          enableRotate
          rotateSpeed={1}
        />
        {/* <FocusOnObject
          setFocusObject={(obj) => changeFocusObject(obj)}
          focusObject={focusObject}
          focusFromOutside={focusFromOutside}
          controls={controlerRef}
          initialCameraPos={initialCameraPos}
          refList={refList}
          setFocusFromOutside={setFocusFromOutside}
        /> */}
        <Light distance={9000} />
        <Detailed distances={[0, 4500, 6000]}>
          <LandscapeHigh allowShadow={allowShadow} />
          <LandscapeMed allowShadow={allowShadow} />
          <LandscapeLow allowShadow={allowShadow} />
        </Detailed>
        <Detailed distances={[0, 4500, 6000]}>
          <EasterEgg />
          <group></group>
          <group></group>
        </Detailed>
        <Restaurants
          setFocusObject={(obj) => changeFocusObject(obj)}
          allowShadow={allowShadow}
          refsToUse={restaurantRefs}
        />
  
        <Lifts
          allowShadow={allowShadow}
          refsToUse={liftRefs}
          setFocusObject={(obj) => changeFocusObject(obj)}
          focusFromOutside={focusFromOutside}
        />
        <Trees allowShadow={allowShadow} />
        <Slopes
         
          refsToUse={slopesRefs}
          setFocusObject={(obj) => changeFocusObject(obj)}
        />       <Huts />
        <SetUpControls
          controls={controlerRef}
          initialCameraPos={initialCameraPos}
          focusObject={focusObject}
          refList={refList}
          setFocusObject={(obj) => changeFocusObject(obj)}
        />
      
        <Loading setLoading={setLoading} />
      </R3fCanvas>
    </div>
  );
};

export default Canvas;
