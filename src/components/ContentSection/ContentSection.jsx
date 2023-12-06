import "./ContentSection.css";
import ContentAccordion from "../ContentAccordion/ContentAccordion";
import { useState } from "react";
import PropTypes from "prop-types";
import CameraSVG from "../../assets/icons/camera.svg?react";

const ContentSection = ({ item, camera, data, title }) => {
  const [open, toggleOpen] = useState(false);

  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";

  
  const handleClick = () => {
    toggleOpen(!open);
  };
  return (
    <div className="mb-8 ">
      <div onClick={handleClick} className="cursor-pointer">
        <ContentAccordion item={item} icon={item.icon} open={open} />
      </div>

      <div
        className={` ease-in-out duration-500 group ${
          open ? "is-active " : ""
        }`}
      >
        <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[520px] pl-4 pr-4">
          <p className="text-xl-4 font-medium text-1xl mt-6">{title}</p>
        
          {data.map((item, index) => ( 
          <div className="flex  mt-2 justify-between w-full p-2 trasition-all duration-500 hover:bg-white/20" key={index }>
            <div className="flex items-center">
              <span className={`dot ${item.status == 'OPEN' ? "bg-green" : "bg-red"}`}></span>
              <p className="ml-4">{item.name}</p>
            </div>
            {camera && <CameraSVG className={NAV_ICON_CLASSES} />}
          </div>))}
        </div>
      </div>
    </div>
  );
};

ContentSection.propTypes = {
  item: PropTypes.object.isRequired,
  camera: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
 

};

export default ContentSection;
