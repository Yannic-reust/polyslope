import PropTypes from "prop-types";
import useWeatherData from "./useWeatherData";

function WeatherTile({ data, day, icon }) {
  const { tempLow, tempHigh } = useWeatherData(data);

  return (
    <>
      <div className="h-full flex flex-col items-center p-4">
        <p className="text-center text-h-xs font-thin ">{day}</p>
        {icon}
        {/* <p>{weather}</p> */}
        <div className="mt-6">
          <span className="align-baseline text-h-xs font-thin">{tempLow}</span>
          <span className="text-h-md font-thin ">
            |{tempHigh}
            <sup className="text-h-xs font-thin">°C</sup>
          </span>
        </div>
      </div>
    </>
  );
}

WeatherTile.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  data: PropTypes.array.isRequired,
};

export default WeatherTile;
