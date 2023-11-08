
import SunnySVG from "../../assets/icons/sun.svg?react";

function WeatherTile({}) {
  
  return (
    <>
 
          <div >
       
            <p className="text-center">Heute</p>
      <SunnySVG />
            <span>0</span>
            <span>
              |3<sup>°C</sup>
            </span>
          </div>
         
     
    </>
  );
}

export default WeatherTile;
