import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';


const FocusOnObject = ({ controls, focusObject, setFocusObject, initialCameraPos, focusFromOutside, refList }) => {

    useEffect(() => {
        focus(focusObject);
    }, [focusObject]);

    useEffect(() => {
        if (focusFromOutside == "Schilthorn") {
          setFocusObject(refList.restaurants[0])
        }
    }, [focusFromOutside]);

    //Focus camera on selected object
    function focus(objRef) {
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
          controls.current.setLookAt( x + 200, y + 400, z + 200, x, y, z, true );
        }
    }


    return ( 
        <>
        </>
     );
}
 
export default FocusOnObject;