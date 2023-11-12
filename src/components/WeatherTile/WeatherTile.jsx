import PropTypes from "prop-types";
import useWeatherData from "./useWeatherData";
import useWeatherCode from "./useWeatherCode";

function WeatherTile({ data, day, weatherCode }) {
  const { tempLow, tempHigh } = useWeatherData(data);

  const icon = useWeatherCode(weatherCode);
  
  return (
    <>
      <div className="h-full flex flex-col items-center p-4">
        <p className="text-center text-h-xs font-thin ">{day}</p>
        {icon.icon}

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
  weatherCode: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default WeatherTile;
