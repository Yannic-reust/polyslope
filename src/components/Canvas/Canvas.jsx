import { Canvas as R3fCanvas } from "@react-three/fiber";
import { CameraControls, Detailed, PerformanceMonitor } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

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
import { Perf, setCustomData } from "r3f-perf";
import { useDispatch, useSelector } from "react-redux";
import { PerformanceMode, setPerformance } from "../../store/performance/performanceState";

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
  // different shadow settings based on device performance
  const shadowHigh = {trees: true, buildings: true, landscape: true};
  const shadowMedium = {trees: false, buildings: false, landscape: true};
  const shadowLow = {trees: false, buildings: false, landscape: false};

  const [allowShadow, setAllowShadow] = useState(shadowMedium)
  let currentPerformance = useSelector((state) => state.performance.value);
  const dispatch = useDispatch();

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

  useEffect(() => {
    switch(currentPerformance) {
      case PerformanceMode.HIGH:
        setAllowShadow(shadowHigh);
        break;
      case PerformanceMode.MEDIUM:
        setAllowShadow(shadowMedium);
        break;
      case PerformanceMode.LOW:
        setTimeout(() => {
          setAllowShadow(shadowLow);
        }, 12000) // to still display intro animation
        setDpr(1)
        break;
    }
  },[currentPerformance]);

  // reacts to changes in performance on device
  function adaptToPerformance(perf) {

    setCustomData(perf.factor) // for the r3f-perf

    if(perf.factor >= 0.6) {
      dispatch(setPerformance(PerformanceMode.HIGH));
      return;
    } else if(perf.factor <= 0.4) {
      dispatch(setPerformance(PerformanceMode.LOW));
      return;
    }
    dispatch(setPerformance(PerformanceMode.MEDIUM))
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
  const easterEggRefA = useRef();
  const easterEggRefB = useRef();
  const easterEggRefs = [
    easterEggRefA,
    easterEggRefB
  ]

  const [dpr, setDpr] = useState([1, 2]) // change the render resolution

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
        dpr={dpr} // render resolution
      >

        <Perf 
          position="top-left"
          customData={{ value: 0.5, name: 'factor', round: 1 }}
        />

        <PerformanceMonitor onChange={ (perf) => adaptToPerformance(perf)} flipflops={3} onFallback={() => dispatch(setPerformance(PerformanceMode.LOW))} />

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
        <FocusOnObject
          setFocusObject={(obj) => changeFocusObject(obj)}
          focusObject={focusObject}
          focusFromOutside={focusFromOutside}
          controls={controlerRef}
          initialCameraPos={initialCameraPos}
          refList={refList}
          setFocusFromOutside={setFocusFromOutside}
          easterEggRefs={easterEggRefs}
        />
        <Light distance={9000} />
        <Detailed distances={[0, 4500, 6000]}>
          <LandscapeHigh allowShadow={allowShadow} />
          <LandscapeMed allowShadow={allowShadow} />
          <LandscapeLow allowShadow={allowShadow} />
        </Detailed>
        <Detailed distances={[0, 4500, 6000]}>
          <EasterEgg 
            refsToUse={easterEggRefs}
            setFocusObject={(obj) => changeFocusObject(obj)} 
          />
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
        />       
        <Huts allowShadow={allowShadow} />
        <SetUpControls
          controls={controlerRef}
          initialCameraPos={initialCameraPos}
          focusObject={focusObject}
          refList={refList}
          setFocusObject={(obj) => changeFocusObject(obj)}
        />
        {/* <Loading setLoading={setLoading} /> */}
      </R3fCanvas>
    </div>
  );
};

export default Canvas;
