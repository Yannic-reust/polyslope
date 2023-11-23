import "./ContentSection.css";
import ContentAccordion from "../ContentAccordion/ContentAccordion";
import { useState } from "react";
import PropTypes from "prop-types";
import CrosshairSVG from "../../assets/icons/crosshair.svg?react";

const ContentSection = ({ item, icon, camera }) => {
  const [open, toggleOpen] = useState(false);

  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";

  //toggles color on dot
  const active = false;
  const handleClick = () => {
    toggleOpen(!open);
  };
  return (
    <div className="">
      <div className="mb-8 ">
        <div onClick={handleClick} className="cursor-pointer">
          <ContentAccordion item={item} icon={icon} open={open}/>
        </div>

        <div
          className={` ease-in-out duration-500 group ${
            open ? "is-active " : ""
          }`}
        >
          <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[400px] pl-4 pr-4">
            <p className="text-xl-4 font-medium text-1xl mt-6">Bergbahnen</p>
          
            <div className="flex  mt-2 justify-between w-full p-2 trasition-all duration-500 hover:bg-white/20">
              <div className="flex items-center">
                <span
                  className={`dot ${active ? "bg-green" : "bg-red"}`}
                ></span>
                <p className="ml-4">Lauterbrunnen - Mürren</p>
              </div>
              {camera && <CrosshairSVG className={NAV_ICON_CLASSES} />}
            </div>
            <div className="flex  mt-2 justify-between w-full p-2 trasition-all duration-500 hover:bg-white/20">
              <div className="flex items-center">
                <span
                  className={`dot ${active ? "bg-green" : "bg-red"}`}
                ></span>
                <p className="ml-4">Mürren - Birg</p>
              </div>
              {camera && <CrosshairSVG className={NAV_ICON_CLASSES} />}
            </div>
            <div className="flex  mt-2 justify-between w-full p-2 trasition-all duration-500 hover:bg-white/20">
              <div className="flex items-center">
                <span
                  className={`dot bg-green`}
                ></span>
                <p className="ml-4">Mürren - Lauterburnnen</p>
              </div>
              {camera && <CrosshairSVG className={NAV_ICON_CLASSES} />}
            </div>
            <div className="flex  mt-2 justify-between w-full p-2 trasition-all duration-500 hover:bg-white/20">
              <div className="flex items-center">
                <span
                  className={`dot bg-green`}
                ></span>
                <p className="ml-4">Gimmelwald - Mürren</p>
              </div>
              {camera && <CrosshairSVG className={NAV_ICON_CLASSES} />}
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
  camera: PropTypes.bool.isRequired
};

export default ContentSection;
