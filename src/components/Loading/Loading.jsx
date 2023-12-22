import { useEffect, useRef } from "react";

import LoadingGIF from "../../assets/gifs/loading.gif";
import LoadingIMG from "../../assets/icons/snowflake.png";

const Loading = ({loading}) => {

    const ref = useRef();
    let deg = 0;

    useEffect(() => {
    
    }, [loading]);

    function rotate() {
        ref.current.style.rotate = "980deg"
    }

    return ( 
        <div className={`w-screen h-screen absolute grid place-items-center bg-white z-[10000]`} >
            <div className="tablet:w-max h-max grid place-items-center">
                <img onLoad={rotate} className="transition-all ease-linear duration-[10000ms] max-w-[50%] pr-[35px]" ref={ref} src={LoadingIMG} alt="Loading GIF" />
                <p className="text-black w-full text-center mt-[20px]">Loading...</p>
            </div>
        </div>
     );
}
 
export default Loading;