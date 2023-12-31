import "./ToolTipHuts.css";
import { useState } from "react";

const ToolTipHuts = ({ name }) => {
    return ( 
        <div className="contentHuts">
            <div className="flex">
                <p className="text-p-md select-none text-black">{ name }</p>
            </div>
      </div>
     );
}
 
export default ToolTipHuts;
