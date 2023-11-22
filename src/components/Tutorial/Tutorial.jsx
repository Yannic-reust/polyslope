import { useState } from "react";

import Content from "./Content"

const Tutorial = () => {

    const [menuState, setMenuState] = useState(0);
    

    return ( 
        
        <div className={`w-screen h-screen bg-slate-300 backdrop-blur-sm grid place-items-center ${menuState == 4 ? "hidden" : "block"}`}>

            <div className="w-[450px] h-[350px] grid items-center bg-white/50"
                 style={{gridTemplateRows: "2fr 10fr 2fr 2fr"}}>
                <p className="justify-self-end px-4 font-thin text-xs text-black cursor-pointer"
                        style={{fontSize: "0.9em"}}
                        onClick={() => setMenuState(4)}>Skip</p>

                <Content stage={menuState}/>

                <input type="button" 
                        value="Next" 
                        className="px-6 py-2 cursor-pointer justify-self-center h-max w-max row-start-3"
                        style={{backgroundColor: "rgb(2 132 199)"}}
                        onClick={() => setMenuState(menuState + 1)}/>

                <div className="row-start-4 justify-self-center w-max flex gap-[7px]">
                    <div className={`w-[8px] h-[8px] rounded-full cursor-pointer ${menuState == 0 ? "bg-white" : "border-[1px]"}`}
                        onClick={() => setMenuState(0)}></div>
                    <div className={`w-[8px] h-[8px] rounded-full cursor-pointer ${menuState == 1 ? "bg-white" : "border-[1px]"}`}
                        onClick={() => setMenuState(1)}></div>
                    <div className={`w-[8px] h-[8px] rounded-full border-[1px] cursor-pointer ${menuState == 2 ? "bg-white" : "border-[1px]"}`}
                        onClick={() => setMenuState(2)}></div>
                    <div className={`w-[8px] h-[8px] rounded-full border-[1px] cursor-pointer ${menuState == 3 ? "bg-white" : "border-[1px]"}`}
                        onClick={() => setMenuState(3)}></div>
                </div>
            </div>

        </div>
     );
}
 
export default Tutorial;