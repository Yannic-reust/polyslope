import "./ToolTipLifts.css";
import { useState } from "react";
import CableCarSVG from "../../assets/icons/cable-car.svg?react";
import DragLiftSVG from "../../assets/icons/draglift.svg?react";
import GondolaSVG from "../../assets/icons/gondola.svg?react";
import TramLiftSVG from "../../assets/icons/tramlift.svg?react";
import ChairLiftSVG from "../../assets/icons/chairlift.svg?react";
import { LiftType } from "../Models/Lifts";

// https://www.skiresort.ch/skigebiet/schilthorn-muerrenlauterbrunnen/liftebahnen/

function ToolTipLifts({ handle, lift }) {
  const ICON_CLASSES = "w-4 h-auto fill-white";
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    handle(lift.name)
  };

  const getPlantIcon = (liftType) => {
    switch(liftType) {
      case LiftType.Gondola:
        return <GondolaSVG className={ICON_CLASSES} />
      case LiftType.CableCar:
        return <CableCarSVG className={ICON_CLASSES} />
      case LiftType.Chair:
        return <ChairLiftSVG className={"translate-x-[2px] " + ICON_CLASSES} />
      case LiftType.Tram:
        return <TramLiftSVG className={ICON_CLASSES} />
      case LiftType.Drag:
        return <DragLiftSVG className={"translate-x-[1px] " + ICON_CLASSES} />
      default:
        return <ChairLiftSVG className={ICON_CLASSES} />
    }
  }

  return (
    <>
      <div className={`contentLift select-none ${open ? "lineLift" : ""}`} onClick={toggleOpen}>
        <div className="flex">
          {!open && getPlantIcon(lift.type ?? '')}
          {open && <p className="text-p-md font-semibold text-center text-white">{LiftName}</p>}
        </div>
        {open && (
          <div>
            { lift.hours && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Betriebszeiten: {lift.hours}</p>
            </div> }
            { lift.lastDescent && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Letzte Talfahrt: {lift.lastDescent}</p>
            </div> }
            { lift.capacity && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Kapazität: {lift.capacity}</p>
            </div> }
            { lift.length && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Länge: {lift.length}</p>
            </div> }
          </div>
        )}
      </div>
    </>
  );
}

export default ToolTipLifts;
