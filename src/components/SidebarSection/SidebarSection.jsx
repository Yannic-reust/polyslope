import "./SidebarSection.css";
import SidebarElement from "../SidebarElement/SidebarElement";
import { useState } from "react";
import PropTypes from "prop-types";

const SidebarSection = ({ item }) => {
  const [open, toggleOpen] = useState(false);

  const handleClick = () => {
    toggleOpen(!open);
  };
  return (
    <div className="">
      <div onClick={handleClick} className="mb-8">
        <SidebarElement item={item} />
        {open && (
          <div>
            <p className="text-xl-4 font-medium text-1xl mt-6">Bergbahnen</p>
            <div className="flex  mt-2 justify-between w-full">
              <div className="flex items-center">
                <span className="dot"></span>
                <p className="ml-4">Lauterbrunnen - Mürren</p>
              </div>

              <img src="/vite.svg" alt="camera icon" className="w-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SidebarSection.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SidebarSection;
