import "./ToolTipLifts.css";
import { useState } from "react";
import PlantsSVG from "../../assets/icons/cable-car.svg?react";
import { LiftType } from "../Models/Lifts";

// function ToolTipLifts({ dataLiftName, OpeningHours, lastDescent })

function ToolTipLifts({ lift }) {
  const ICON_CLASSES = "w-4 h-auto fill-white";
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const getPlantIcon = (liftType) => {
    switch(liftType) {
      case LiftType.Gondola:
        return <PlantsSVG className={ICON_CLASSES} />
      case LiftType.Chair:
        return <PlantsSVG className={ICON_CLASSES} />
      case LiftType.Drag:
        return <PlantsSVG className={ICON_CLASSES} />
      default:
        return <PlantsSVG className={ICON_CLASSES} />
    }
  }

  return (
    <>
      <div className={`contentLift ${open ? "lineLift" : ""}`} onClick={toggleOpen}>
        <div className="flex">
          {!open && getPlantIcon(lift.type ?? '')}
          {open && <p className="ml-2 text-p-lg text-white">{lift.name ?? ''}</p>}
        </div>
        {open && (
          <div>
            { lift.hours && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Öffnungszeiten:</p>
              <p className="text-p-xs text-center">{lift.hours}</p>
            </div> }
            { lift.lastDescent && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Letzte Talfahrt:</p>
              <p className="text-p-xs text-center">{lift.lastDescent}</p>
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
