import "./BadgeSlopes.css";
import PropTypes from "prop-types";

function BadgeSlopes({ BadgeNumber, BageColor }) {
  return (
    <>
      <div className={`circle bg-[${BageColor}]`}   style={{backgroundColor: `${BageColor}`}}>
        <p className="circle__content select-none text-white  ">{BadgeNumber}</p>
      </div>
    </>
  );
}

BadgeSlopes.propTypes = {
  BadgeNumber: PropTypes.string.isRequired,
  BageColor: PropTypes.string.isRequired,

};


export default BadgeSlopes;
