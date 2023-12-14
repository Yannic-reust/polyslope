import "./ContentSection.css";
import ContentAccordion from "../ContentAccordion/ContentAccordion";
import { useState } from "react";
import PropTypes from "prop-types";
import CrosshairSVG from "../../assets/icons/crosshair.svg?react";
import { useRef } from "react";


const ContentSection = ({ item, camera, data, setFocusFromOutside }) => {
  const [open, toggleOpen] = useState(false);

  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";
  const handleClick = () => {
    toggleOpen(!open);
  };

  const setFocus = (name)=>{
   
   setFocusFromOutside(name)
  }
  const optionsRef = useRef(null);


  
  return (
    <div className="mb-8">
      {data && (
        <>
          <div onClick={handleClick} className="cursor-pointer">
            <ContentAccordion item={item} icon={item.icon} open={open} />
          </div>

          <div className={`ease-in-out duration-500`}>
            <div
              ref={optionsRef}
              style={{
                maxHeight: open ? `${optionsRef.current.scrollHeight}px ` : "",
              }}
              className={`relative overflow-hidden max-h-0 duration-500  pl-4 pr-4`}
            >
              {data.map((item, index) => (
                <div key={index}>
                  <p className="text-xl-4 font-medium text-1xl mt-6">{item.title}</p>
                  {item.data.map((item2, index) => (
                    <div
                      className={`flex mt-2 justify-between w-full  p-2 trasition-all  duration-500 cursor-pointer hover:bg-white/20`}
                      key={index}
                      onClick={()=>setFocus(item2.name)}
                    >
                      <div className="flex items-center">
                        <span
                          className={`dot ${
                            item2.status == "OPEN" ? "bg-green" : "bg-red"
                          }`}
                        ></span>
                        <p className="ml-4">{item2.name}</p>
                      </div>
                      {item.title === "Bergbahnen" &&
                        <CrosshairSVG className={NAV_ICON_CLASSES} />
                      }
                    
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

ContentSection.propTypes = {
  item: PropTypes.object.isRequired,
  camera: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
};

export default ContentSection;
