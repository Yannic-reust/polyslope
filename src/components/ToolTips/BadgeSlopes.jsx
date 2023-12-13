import "./BadgeSlopes.css";
import PropTypes from "prop-types";
import { useState } from "react";

function BadgeSlopes({ BadgeNumber, BageColor,Length,Status,Name,handle }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    handle(BadgeNumber)
  };

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
          <div>
            <p className="font-semibold"> {Name}</p>
            <p>
              Status: {Status}
            </p>
            <p>Length: {Length}m</p>
          </div>
        )}
      </div>
    </>
  );
}



export default BadgeSlopes;
