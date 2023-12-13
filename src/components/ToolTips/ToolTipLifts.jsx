import "./ToolTipLifts.css";
import { useState } from "react";
import PlantsSVG from "../../assets/icons/cable-car.svg?react";

function ToolTipLifts({ LiftName, OpeningHours, lastDescent, setFocusObject, meshRef }) {
  const ICON_CLASSES = "w-4 h-auto fill-white";
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    setFocusObject(meshRef);
  };

  return (
    <>
      <div className={`contentLift ${open ? "lineLift" : ""}`} onClick={toggleOpen}>
        <div className="flex">
          {!open && <PlantsSVG className={ICON_CLASSES} />}
          {open && <p className="ml-2 text-p-lg text-white">{LiftName}</p>}
        </div>
        {open && (
          <div>
            <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Öffnungszeiten:</p>
              <p className="text-p-xs text-center">{OpeningHours}</p>
            </div>
            <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Letzte Talfahrt:</p>
              <p className="text-p-xs text-center">{lastDescent}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ToolTipLifts;
