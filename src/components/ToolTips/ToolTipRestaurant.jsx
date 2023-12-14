import "./ToolTipRestaurant.css";
import { useState } from "react";
import FoodSVG from "../../assets/icons/food.svg?react";


function ToolTipRestaurant({ handle, restaurant,setFocusObject, meshRef }) {
  const ICON_CLASSES = "w-3 h-auto fill-white";
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    setFocusObject(meshRef);
    handle(restaurant.name)
  };

  return (
    <>
      <div className={`contentRestaurant select-none ${open ? "lineRestaurant" : ""}`} onClick={toggleOpen}>
        <div className="flex">
          {!open && <FoodSVG className={ICON_CLASSES} />}
          {open && (
            <p className="ml-2 text-p-lg text-white">{ restaurant.name }</p>
          )}
        </div>
        {open && (
          <div>
            { restaurant.days && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Geöffnet: {restaurant.days}</p>
            </div> }
            { restaurant.contact && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center">Kontakt: {restaurant.contact}</p>
            </div> }
            { restaurant.contact && <div className="flex flex-col text-white ">
              <p className="text-p-xs text-center"><a className="text-accent hover:border-b-[1px]" target="_blank" href={restaurant.website}>Webseite</a></p>
            </div> }
          </div>
        )}
      </div>
    </>
  );
}

export default ToolTipRestaurant;
