import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import WeatherTodayDetail from "../WeatherTodayDetail/WeatherTodayDetail";
import WeatherTile from "../WeatherTile/WeatherTile";
import useDayData from "./useDayData";
import { useState, useEffect } from "react";
import SunnySVG from "../../assets/icons/sun.svg?react";

function Weather() {
  const [slicedData, setSlicedData] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [icons, setIcons] = useState(null);

  const arr = [1, 2, 3, 4, 5, 6];

  const { daysArray } = useDayData();

  const sliceArray = (data) => {
    if (data && data.hourly && data.hourly.temperature_2m) {
      const txempData = data.hourly.temperature_2m;

      const slicedArrays = [];
      for (let i = 0; i < tempData.length; i += 24) {
        const slicedData = tempData.slice(i, i + 24);
        slicedArrays.push(slicedData);
      }
      setSlicedData(slicedArrays);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=46.5594243057797&longitude=7.893055030509216&current=temperature_2m,rain,snowfall,cloud_cover,wind_speed_10m&hourly=temperature_2m&daily=weather_code"
        );

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const result = await response.json();

        setCurrentData(result.current);
        sliceArray(result);
        setIcons(result.daily.weather_code);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <ContentIntroduction
          title="Wetter"
          text="Informieren Sie sich über das aktuelle Wetter im Skigebiet Mürren - Schilthorn."
        />
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-white/20  col-span-2 ">
            {slicedData && (
              <WeatherTile
                idx={0}
                data={slicedData[0]}
                day={"Heute"}
                weatherCode={icons[0]}
              />
            )}
          </div>
          <div className="bg-white/20  col-span-4 p-8">
            {currentData && <WeatherTodayDetail weather={currentData} />}
          </div>
        </div>
        {slicedData && (
          <div className="grid grid-cols-6 gap-4 mt-4">
            {arr.map((item) => (
              <div className="bg-white/20  col-span-1 " key={item}>
                <WeatherTile
                  idx={item}
                  data={slicedData[item]}
                  day={daysArray[item - 1]}
                  weatherCode={icons[item]}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
