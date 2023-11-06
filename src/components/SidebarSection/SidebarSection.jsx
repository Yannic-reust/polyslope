import "./SidebarSection.css";
import SidebarElement from "../SidebarElement/SidebarElement";
import { useState } from "react";
import PropTypes from "prop-types";

const SidebarSection = ({ item, icon }) => {
  const [open, toggleOpen] = useState(false);

  const handleClick = () => {
    toggleOpen(!open);
  };
  return (
    <div className="">
      <div className="mb-8 cursor-pointer">
        <div onClick={handleClick}>
          <SidebarElement item={item} icon={icon} />
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            open ? "opacity-100" : "opacity-0 "
          }`}
        >
          <p className="text-xl-4 font-medium text-1xl mt-6">Bergbahnen</p>
          <div className="flex  mt-2 justify-between w-full">
            <div className="flex items-center">
              <span className="dot"></span>
              <p className="ml-4">Lauterbrunnen - Mürren</p>
            </div>

            <img src="/vite.svg" alt="camera icon" className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarSection.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
};

export default SidebarSection;
