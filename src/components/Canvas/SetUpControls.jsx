import { useEffect } from 'react';
import { CameraControls } from '@react-three/drei'

const SetUpControls = ({controls}) => {

    useEffect(() => {
        controls.current.mouseButtons.left = 2;
        controls.current.mouseButtons.right = 1;
        //controls.current.touches.one = 2;
    }, []);

    return ( 
        <></>
     );
}
 
export default SetUpControls;