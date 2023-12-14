import "./BadgeSlopes.css";
import PropTypes from "prop-types";
import { useState } from "react";

function BadgeSlopes({ BadgeNumber, BageColor,Length,Status,Name,handle,setFocusObject, meshRef }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    handle(BadgeNumber)
    setFocusObject(meshRef);
  };

  const PlantStatus = {
    OPEN: "offen",
    CLOSED: "geschlossen",
    UNAVAILABLE: "unbekannt",
  }

  function convertStatus(status) {
    switch(status) {
      case "CLOSED":
        return PlantStatus.CLOSED
      case "OPEN":
        return PlantStatus.OPEN
      default:
        return PlantStatus.UNAVAILABLE
    }
  }

  return (
    <>
      <div
        className={`circle bg-[${BageColor}] ${
          open ? "openBadge" : ""
        } flex items-center justify-center`}
        style={{ backgroundColor: `${BageColor}` }}
        onClick={toggleOpen}
      >
        {!open && (
          <div>
            <p className="circle__content select-none text-white font-karmina text-p-xs">
              {BadgeNumber}
            </p>
          </div>
        )}

        {open && (
          <div className="select-none">
            <p className="font-semibold text-center text-p-md"> {Name}</p>
            <p className="text-center text-p-xs">
              Status: {convertStatus(Status)}
            </p>
            <p className="text-center text-p-xs">Länge: {Length}m</p>
          </div>
        )}
      </div>
    </>
  );
}



export default BadgeSlopes;
