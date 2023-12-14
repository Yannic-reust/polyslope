import MouseRightSVG from "../../assets/icons/mouse-right.svg?react";
import MouseCenterSVG from "../../assets/icons/mouse-center.svg?react";
import MouseLeftSVG from "../../assets/icons/mouse-left.svg?react";
import PinchPNG from "../../assets/icons/pinch.png?react";
import SwipePNG from "../../assets/icons/swipe.png?react";
import RotatePNG from "../../assets/icons/rotate.png?react";
import SkiSVG from "../../assets/icons/ski.svg?react";


const ImageDrag = () => {
    return ( 
        <>
            {/* Desktop */}
            <MouseLeftSVG className="h-[75%] self-start hidden desktop:block" />
            {/* Mobile */}
            <img src={SwipePNG} className="h-[75px] self-start desktop:hidden" />
        </>
     );
}

const ImageZoom = () => {
    return ( 
        <>
            {/* Desktop */}
            <MouseCenterSVG className="h-[75%] self-start hidden desktop:block" />
            {/* Mobile */}
            <img src={PinchPNG} className="h-[80px] self-start desktop:hidden" />
        </>
     );
}

const ImageRotate = () => {
    return ( 
        <>
            {/* Desktop */}
            <MouseRightSVG className="h-[75%] self-start hidden desktop:block"/>
            {/* Mobile */}
            <img src={RotatePNG} className="h-[85px] self-start desktop:hidden" />
        </>
     );
}

const TextContent = ({stage}) => {

    let titleArray = [
        "Wilkommen",
        "Bewegen",
        "Zoomen",
        "Drehen"
    ];

    let textArray = [
        "im Skigebiet Mürren-Schilthorn",
        "Nutze Linksklick um die Ansicht zu bewegen.",
        "Nutze dein Mausrad zum Zoomen.",
        "Nutze Recktsklick um die Ansicht zu drehen."
    ]

    let textArrayMobile = [
        "im Skigebiet Mürren-Schilthorn",
        "Nutze ein Finger um die ansicht zu bewegen.",
        "Zwei Finger zusammen ziehen zum Zoomen.",
        "Zwei Finger bewegen um die Ansicht zu drehen."
    ];

    return (
        <>
            <h3 className="text-black text-h-md text-center">{titleArray[stage]}</h3>
            {/* Desktop */}
            <p className="text-black text-center desktop:hidden">{textArrayMobile[stage]}</p>
            {/* Mobile */}
            <p className="text-black text-center hidden desktop:block">{textArray[stage]}</p>
        </>
    )
}




const Content = ({ stage }) => {

    return ( 
        <div className="grid justify-items-center items-center h-max"
             style={{gridTemplateRows: "3fr 1fr 1fr"}}>
            {stage == 0 && <SkiSVG className="h-[75%] max-w-[100px] max-h-[75px] self-start"/>}
            {stage == 1 && <ImageDrag />}
            {stage == 2 && <ImageZoom />}
            {stage == 3 && <ImageRotate />}
            {stage < 4 && <TextContent stage={stage} />}
        </div>
     );
}
 
export default Content;