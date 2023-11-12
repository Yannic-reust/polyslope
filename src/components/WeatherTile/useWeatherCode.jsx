import { useEffect, useState } from "react";
import SunnySVG from "../../assets/iconsWeather/weather-sun.svg?react";
import CloudySVG from "../../assets/iconsWeather/weather-cloudy.svg?react";
import FogSVG from "../../assets/iconsWeather/weather-fog.svg?react";
import RainSVG from "../../assets/iconsWeather/weather-rain.svg?react";
import RainCloudySVG from "../../assets/iconsWeather/weather-sunny-cloudy-rainy.svg?react";
import SnowSVG from "../../assets/iconsWeather/weather-snow.svg?react";
import ThunderstormSVG from "../../assets/iconsWeather/weather-thunderstorm.svg?react";

const useWeatherCode = (weatherCode) => {
  const ICON_CLASSES = "mt-6 fill-white w-10";

  const [icon, setIcon] = useState(null);

  useEffect(() => {
    let weatherCondition = null;
    switch (weatherCode) {
      case 0:
        weatherCondition = <SunnySVG className={ICON_CLASSES} alt="Sun icon"/>;
        break;
      case 1:
      case 2:
      case 3:
        weatherCondition = <CloudySVG className={ICON_CLASSES} alt="Cloudy icon"/>;
        //weatherCondition = "Mainly clear, Pretty Cloudy, Overcast";
        break;
      case 45:
      case 48:
        weatherCondition = <FogSVG className={ICON_CLASSES} alt="Fog icon" />;
        //weatherCondition = "Fog";
        break;
      case 51:
      case 53:
      case 55:
        weatherCondition = <RainCloudySVG className={ICON_CLASSES} alt="RainCloud icon"/>;
        // weatherCondition = "Drizzle - Light, Moderate, and Dense intensity";
        break;
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 80:
      case 81:
      case 82:
        weatherCondition = <RainSVG className={ICON_CLASSES} />;
        //weatherCondition = "Rain - Slight, Moderate, Heavy intensity";
        //weatherCondition = "Freezing Rain - Light, Heavy intensity";
        //weatherCondition = "Rain Showers - Slight, Moderate, and Violent";
        break;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        weatherCondition = <SnowSVG className={ICON_CLASSES} alt="Snow icon" />;
        //weatherCondition = "Snow Showers - Slight and Heavy";
        //weatherCondition = "Snowfall - Slight, Moderate, Heavy intensity";
        //weatherCondition = "Snow Grains";
        break;
      case 95:
      case 96:
      case 99:
        weatherCondition = <ThunderstormSVG className={ICON_CLASSES} alt="Thunderstorm icon"/>;
        //weatherCondition = "Thunderstorm - Slight or Moderate";
        //weatherCondition = "Thunderstorm with Slight, Heavy Hail";
        break;
    }
    setIcon(weatherCondition);
  }, [weatherCode]);

  return { icon };
};

export default useWeatherCode;
