import "./ContentSection.css";
import ContentAccordion from "../ContentAccordion/ContentAccordion";
import { useState } from "react";
import PropTypes from "prop-types";
import CameraSVG from "../../assets/icons/camera.svg?react";

const ContentSection = ({ item, icon }) => {
  const [open, toggleOpen] = useState(false);

  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";

  //toggles color on dot
  const active = false
  const handleClick = () => {
    toggleOpen(!open);
  };
  return (
    <div className="">
      <div className="mb-8 ">
        <div onClick={handleClick} className="cursor-pointer">
          <ContentAccordion item={item} icon={icon} />
        </div>

        <div
          className={` ease-in-out duration-500 group ${
            open ? "is-active " : ""
          }`}
        >
          <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[100px] pl-4 pr-4">
            <p className="text-xl-4 font-medium text-1xl mt-6">Bergbahnen</p>
            <div className="flex  mt-2 justify-between w-full">
              <div className="flex items-center">
                <span className={`dot ${active ? "bg-green":"bg-red"}`}></span>
                <p className="ml-4">Lauterbrunnen - Mürren</p>
              </div>
              <CameraSVG className={NAV_ICON_CLASSES} />
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentSection.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element,
};

export default ContentSection;
