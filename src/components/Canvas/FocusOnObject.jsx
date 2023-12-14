import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

let fromOutside = false;

const FocusOnObject = ({
  controls,
  focusObject,
  setFocusObject,
  initialCameraPos,
  focusFromOutside,
  refList,
}) => {
  useEffect(() => {
    focus(focusObject, fromOutside);
  }, [focusObject]);

  useEffect(() => {
    fromOutside = true;

    if (focusFromOutside == "Gimmeln") {
      setFocusObject(refList.lifts[0]);
    }
    if (focusFromOutside == "Riggili") {
      setFocusObject(refList.lifts[1]);
    }
    if (focusFromOutside == "Muttleren") {
      setFocusObject(refList.lifts[2]);
    }
    if (focusFromOutside == "Kandahar") {
      setFocusObject(refList.lifts[3]);
    }
    if (focusFromOutside == "Mürren - Allmendhubel") {
      setFocusObject(refList.lifts[4]);
    }
    if (focusFromOutside == "Allmendhubel") {
      setFocusObject(refList.lifts[5]);
    }
    if (focusFromOutside == "Almiboden") {
      setFocusObject(refList.lifts[6]);
    }
    if (focusFromOutside == "Maulerhubel") {
      setFocusObject(refList.lifts[7]);
    }
    if (focusFromOutside == "Winteregg") {
      setFocusObject(refList.lifts[8]);
    }
    if (focusFromOutside == "Lauterbrunnen - Grütschalp") {
      setFocusObject(refList.lifts[9]);
    }
    if (focusFromOutside == "Gimmelwald - Mürren") {
      setFocusObject(refList.lifts[10]);
    }
    if (focusFromOutside == "Mürren - Birg") {
      setFocusObject(refList.lifts[11]);
    }
    if (focusFromOutside == "Birg - Schilthorn") {
      setFocusObject(refList.lifts[12]);
    }
    if (focusFromOutside == "Stechelberg - Gimmelwald") {
      setFocusObject(refList.lifts[13]);
    }
    if (focusFromOutside == "Schiltgrat") {
      setFocusObject(refList.lifts[14]);
    }
   
  }, [focusFromOutside]);

  //Focus camera on selected object
  function focus(objRef, fromOutside) {
    if (objRef == null) {
      controls.current.setLookAt(
        initialCameraPos.x,
        initialCameraPos.y,
        initialCameraPos.z,
        initialCameraPos.targetX,
        initialCameraPos.targetY,
        initialCameraPos.targetZ,
        true
      );
    } else {
      let obj = objRef.current;
      let x = obj.position.x;
      let y = obj.position.y;
      let z = obj.position.z;

      if (fromOutside == true) {
        controls.current.setLookAt(
          x + 200,
          y + 400,
          z + 200,
          x + 200,
          y,
          z - 200,
          true
        );
        fromOutside = false;
      } else {
        controls.current.setLookAt(x + 200, y + 400, z + 200, x, y, z, true);
      }
    }
  }

  return <></>;
};

export default FocusOnObject;
