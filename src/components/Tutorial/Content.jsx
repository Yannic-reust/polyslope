import MouseRightSVG from "../../assets/icons/mouse-right.svg?react";
import MouseCenterSVG from "../../assets/icons/mouse-center.svg?react";
import MouseLeftSVG from "../../assets/icons/mouse-left.svg?react";
import SkiSVG from "../../assets/icons/ski.svg?react";


const Content = ({ stage }) => {

    let titleArray = [
        "Welcome",
        "Move",
        "Zoom",
        "Rotate"
    ];

    let textArray = [
        "to the ski area Mürren-Schilthorn",
        "Use your left mouse button to move the camera around.",
        "Use your mouse wheel to zoom in and out.",
        "Use your right mouse button to rotate the camera."
    ]

    return ( 
        <div className="grid justify-items-center items-center h-max"
             style={{gridTemplateRows: "3fr 1fr 1fr"}}>
            {stage == 0 && <SkiSVG className="h-[75%] max-w-[100px] max-h-[75px] self-start"/>}
            {stage == 1 && <MouseLeftSVG className="h-[75%] self-start"/>}
            {stage == 2 && <MouseCenterSVG className="h-[75%] self-start"/>}
            {stage == 3 && <MouseRightSVG className="h-[75%] self-start"/>}
            {stage < 4 && <h3 className="text-black text-h-md">{titleArray[stage]}</h3>}
            {stage < 4 && <p className="text-black">{textArray[stage]}</p>}
        </div>
     );
}
 
export default Content;