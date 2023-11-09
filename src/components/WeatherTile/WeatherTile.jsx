import PropTypes from "prop-types";

function WeatherTile({day, icon, tempLow, tempHigh }) {
  return (
    <>
      <div className="h-full flex flex-col items-center p-4">
        <p className="text-center text-h-xs font-thin ">{day}</p>
        {icon}
       
        <div  className="mt-6">
          <span className="align-baseline text-h-xs font-thin" >{tempLow}</span>
          <span className="text-h-md font-thin ">
            |{tempHigh}<sup className="text-h-xs font-thin">°C</sup>
          </span>
        </div>
      </div>
    </>
  );
}

WeatherTile.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  tempLow: PropTypes.number.isRequired,
  tempHigh: PropTypes.number.isRequired
};

export default WeatherTile;
