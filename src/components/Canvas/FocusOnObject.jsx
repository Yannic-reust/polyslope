import { useEffect } from "react";

let fromOutside = false;

const FocusOnObject = ({
  controls,
  focusObject,
  setFocusObject,
  initialCameraPos,
  focusFromOutside,
  refList,
  setFocusFromOutside,
  easterEggRefs
}) => {
  useEffect(() => {
    focus(focusObject, fromOutside);
  }, [focusObject]);

  useEffect(() => {

    switch (focusFromOutside) {
      case "Gimmeln":
        setFocusObject(refList.lifts[0]);
        fromOutside = true;
        break;
      case "Riggili":
        setFocusObject(refList.lifts[1]);
        fromOutside = true;
        break;
      case "Muttleren":
        setFocusObject(refList.lifts[2]);
        fromOutside = true;
        break;
      case "Kandahar":
        setFocusObject(refList.lifts[3]);
        fromOutside = true;
        break;
      case "Mürren - Allmendhubel":
        setFocusObject(refList.lifts[4]);
        fromOutside = true;
        break;
      case "Allmendhubel":
        setFocusObject(refList.lifts[5]);
        fromOutside = true;
        break;
      case "Almiboden":
        setFocusObject(refList.lifts[6]);
        fromOutside = true;
        break;
      case "Maulerhubel":
        setFocusObject(refList.lifts[7]);
        fromOutside = true;
        break;
      case "Winteregg":
        setFocusObject(refList.lifts[8]);
        fromOutside = true;
        break;
      case "Lauterbrunnen - Grütschalp":
        setFocusObject(refList.lifts[9]);
        fromOutside = true;
        break;
      case "Gimmelwald - Mürren":
        setFocusObject(refList.lifts[10]);
        fromOutside = true;
        break;
      case "Mürren - Birg":
        setFocusObject(refList.lifts[11]);
        fromOutside = true;
        break;
      case "Birg - Schilthorn":
        setFocusObject(refList.lifts[12]);
        fromOutside = true;
        break;
      case "Stechelberg - Gimmelwald":
        setFocusObject(refList.lifts[13]);
        fromOutside = true;
        break;
      case "Schiltgrat":
        setFocusObject(refList.lifts[14]);
        fromOutside = true;
        break;
     
      
    }
  
  }, [focusFromOutside]);

  //Focus camera on selected object
  function focus(objRef, fromOutside) {

    if (objRef == null) {
      setFocusFromOutside("")
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
        if (objRef == easterEggRefs[0] || objRef == easterEggRefs[1]) {
          controls.current.setLookAt(x + 50, y + 50, z + 50, x, y, z, true);
        } else {
          controls.current.setLookAt(x + 200, y + 400, z + 200, x, y, z, true);
        }
      }
    }
  }

  return <></>;
};

export default FocusOnObject;
