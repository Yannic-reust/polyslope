import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber'

const SetUpControls = ({controls, initialCameraPos, focusObject}) => {

    let i = 0;
    let called = 0;
    let checkUserInput = false;
    //not so clean I know but it just acts stupid
    setTimeout(() => {
        checkUserInput = true;
    },100);

    let angle = 0;
    let distance = 8000;

    function setControlSpeed(speed) {
        let truckS = speed * 1.5;
        let rotateS = speed * 0.8;
        if (truckS > 1) truckS = 1;
        controls.current.azimuthRotateSpeed = rotateS;
        controls.current.polarRotateSpeed = rotateS;
        controls.current.dollySpeed = speed;
        controls.current.truckSpeed = truckS;
    }

    useEffect(() => {
        //move look at point
        controls.current.setLookAt(
            initialCameraPos.x, 
            initialCameraPos.y, 
            initialCameraPos.z, 
            initialCameraPos.targetX, 
            initialCameraPos.targetY, 
            initialCameraPos.targetZ
        );
        //change user input config
        controls.current.mouseButtons.left = 2;
        controls.current.mouseButtons.right = 1;
        controls.current.touches.one = 2;
        controls.current.touches.two = 4096;
    }, []);

    useFrame(() => {
        //update camera position
        if (focusObject == null && checkUserInput == true) {
            const cameraPosition = controls.current.getPosition();
            const cameraTarget = controls.current.getTarget();
            initialCameraPos.x = cameraPosition.x;
            initialCameraPos.y = cameraPosition.y;
            initialCameraPos.z = cameraPosition.z;
            initialCameraPos.targetX = cameraTarget.x;
            initialCameraPos.targetY = cameraTarget.y;
            initialCameraPos.targetZ = cameraTarget.z;
        }
        //adapt control speed depending on dolly distance
        let ctrlDistance = controls.current._sphericalEnd.radius;
        if (ctrlDistance < 7000) {
            let maxSpeed = 1;
            let minSpeed = 0.2;
            let maxDistance = 7000;
            let minDistance = 1000;
            let d = ctrlDistance - minDistance;
            let newSpeed = ((maxSpeed - minSpeed) / (maxDistance - minDistance) * d) + minSpeed;
            if (newSpeed > maxSpeed) {
                newSpeed = maxSpeed;
            } else if (newSpeed < minSpeed) {
                newSpeed = minSpeed;
            }
            setControlSpeed(newSpeed);
        } else {
            setControlSpeed(1);
        }
        
    })

    return ( 
        <></>
     );
}
 
export default SetUpControls;