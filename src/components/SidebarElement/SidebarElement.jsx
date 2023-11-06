import "./sidebarElement.css";
import PlusSVG from "../../assets/icons/plus.svg?react";
import PropTypes from "prop-types";

const SidebarElement = ({item,icon}) => {
  return (
    <div className="bg-white/20 p-8 pl-4 pr-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
         {icon}
          <div className="flex items-baseline">
            <h2 className="ml-4 text-h-md font-karmina ">{item.title}</h2>
            <p className="ml-4">{item.text}</p>
          </div>
        </div>
        <PlusSVG className="w-6 max-h-6"/>
      </div>
    </div>
  );
};
SidebarElement.propTypes = {
  item: PropTypes.object.isRequired,
  icon: PropTypes.element
};

export default SidebarElement;
