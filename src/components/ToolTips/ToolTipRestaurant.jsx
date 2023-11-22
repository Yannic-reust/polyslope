import "./ToolTipRestaurant.css";
import { useState } from "react";
import FoodSVG from "../../assets/icons/food.svg?react";

function ToolTipRestaurant({ RestaurantName, OpeningHours }) {
  const ICON_CLASSES = "w-3 h-auto fill-white";
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`content ${open ? "line" : ""}`} onClick={toggleOpen}>
        <div className="flex">
          {!open && <FoodSVG className={ICON_CLASSES} />}
          {open && (
            <p className="ml-2 text-p-lg text-white">{RestaurantName}</p>
          )}
        </div>
        {open && (
          <div className="flex flex-col text-white ">
            <p className="text-p-xs text-center">Öffnungszeiten:</p>
            <p className="text-p-xs text-center">{OpeningHours}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ToolTipRestaurant;
