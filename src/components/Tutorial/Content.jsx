import MouseRightSVG from "../../assets/icons/mouse-right.svg?react";
import MouseCenterSVG from "../../assets/icons/mouse-center.svg?react";
import MouseLeftSVG from "../../assets/icons/mouse-left.svg?react";
import SkiSVG from "../../assets/icons/ski.svg?react";


const Content = ({ stage }) => {

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

    return ( 
        <div className="grid justify-items-center items-center h-max"
             style={{gridTemplateRows: "3fr 1fr 1fr"}}>
            {stage == 0 && <SkiSVG className="h-[75%] max-w-[100px] max-h-[75px] self-start"/>}
            {stage == 1 && <MouseLeftSVG className="h-[75%] self-start"/>}
            {stage == 2 && <MouseCenterSVG className="h-[75%] self-start"/>}
            {stage == 3 && <MouseRightSVG className="h-[75%] self-start"/>}
            {stage < 4 && <h3 className="text-black text-h-md text-center">{titleArray[stage]}</h3>}
            {stage < 4 && <p className="text-black text-center">{textArray[stage]}</p>}
        </div>
     );
}
 
export default Content;