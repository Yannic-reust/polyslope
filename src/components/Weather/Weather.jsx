import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import WeatherTodayDetail from "../WeatherTodayDetail/WeatherTodayDetail";
import WeatherTile from "../WeatherTile/WeatherTile";
import useDayData from "./useDayData";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { snowData } from "../../store/snowData/snowDataState";

function Weather() {
  const [slicedData, setSlicedData] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [icons, setIcons] = useState(null);

  const arr = [1, 2, 3, 4, 5, 6];

  const snowData = useSelector((state) => state.snowData.value);

  const SnowConditions = {
    UNAVAILABLE: "unbekannt",
    HARD: "hart",
    WET: "nass",
    POWDER: "pulver"
  }

  function getSnowCondition(status) {
    switch(status) {
      case "POWDER":
      case "POWDER_HARD":
      case "POWDER_WET":
      case "POWDER_ASPIC":
        return SnowConditions.POWDER
      case "HARD":
      case "HARD_POWDER":
      case "HARD_WET":
      case "HARD_WET":
      case "HARD_ASPIC":
        return SnowConditions.HARD
      case "WET":
      case "WET_POWDER":
      case "WET_SPRING":
      case "WET_HARD":
        return SnowConditions.WET
      default:
        return SnowConditions.UNAVAILABLE
    }
  }

  const AvalancheRisk = {
    UNBEKANNT: "unbekannt",
    GERING: "gering",
    MAESSIG: "mässig",
    ERHEBLICH: "erheblich",
    GROSS: "gross",
    SEHRGROSS: "sehr gross",
  }

  function getAvalancheRisk(level) {
    switch(level) {
      case 1:
        return AvalancheRisk.GERING
      case 2:
        return AvalancheRisk.MAESSIG
      case 3:
        return AvalancheRisk.ERHEBLICH
      case 4:
        return AvalancheRisk.GROSS
      case 5:
        return AvalancheRisk.SEHRGROSS
      default:
        return AvalancheRisk.UNBEKANNT
    }
  }

  const { daysArray } = useDayData();

  const sliceArray = (data) => {
    if (data && data.hourly && data.hourly.temperature_2m) {
      const tempData = data.hourly.temperature_2m;

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
          text="Informieren Sie sich über das aktuelle Wetter und den Schneezustand im Skigebiet Mürren - Schilthorn."
        />

        <div className="mb-8">
          <ul>
            <li>Lawinenwarnstufe: {snowData.avalancheRisk.level} ({getAvalancheRisk(snowData.avalancheRisk.level)})</li>
            <li>Neuschnee seit 24h: {snowData.peakSnow.last24hInCm} cm</li>
            <li>Schneehöhe Berg: {snowData.peakSnow.heightInCm} cm</li>
            <li>Schneehöhe Tal: {snowData.valleySnow.heightInCm} cm</li>
            <li>Schneequalität: {getSnowCondition(snowData.peakSnow.condition)}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-6 gap-4">
          <div className="bg-white/20 grid-cols-6 tablet:col-span-2 ">
            {slicedData && (
              <WeatherTile
                idx={0}
                data={slicedData[0]}
                day={"Heute"}
                weatherCode={icons[0]}
              />
            )}
          </div>
          <div className="bg-white/20 tablet:col-span-4 p-8">
            {currentData && <WeatherTodayDetail weather={currentData} />}
          </div>
        </div>
        {slicedData && (
          <div className="grid grid-cols-2 tablet:grid-cols-6 gap-4 mt-4">
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