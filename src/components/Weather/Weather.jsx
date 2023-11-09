import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import WeatherTodayDetail from "../WeatherTodayDetail/WeatherTodayDetail";
import WeatherTile from "../WeatherTile/WeatherTile";
import { useState, useEffect } from "react";
import SunnySVG from "../../assets/icons/sun.svg?react";

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const tempWeatherData = [
    {
      day: "Montag",
      icon: <SunnySVG className="mt-6" />,
      tempLow: 3,
      tempHigh: 20,
    },
    {
      day: "Dienstag",
      icon: <SunnySVG className="mt-6" />,
      tempLow: 3,
      tempHigh: 20,
    },
    {
      day: "Mittwoch",
      icon: <SunnySVG className="mt-6" />,
      tempLow: 3,
      tempHigh: 20,
    },
    {
      day: "Donnerstag",
      icon: <SunnySVG className="mt-6" />,
      tempLow: 3,
      tempHigh: 20,
    },
    {
      day: "Freitag",
      icon: <SunnySVG className="mt-6" />,
      tempLow: 3,
      tempHigh: 20,
    },
    {
      day: "Samstag",
      icon: <SunnySVG className="mt-6" />,
      tempLow: 3,
      tempHigh: 20,
    },
    
  ];

  useEffect(() => {
    // Function to make an asynchronous query
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
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
            {/* { props.icon } */}
            <WeatherTile
              day={"Today"}
              icon={<SunnySVG className="mt-6" />}
              tempLow={3}
              tempHigh={20}
            />
          </div>
          <div className="bg-white/20  col-span-4 p-8">
            <WeatherTodayDetail />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-4">
          {tempWeatherData.map((item, index) => (
            <div className="bg-white/20  col-span-1 " key={index}>
              <WeatherTile
                day={item.day}
                icon={item.icon}
                tempLow={item.tempLow}
                tempHigh={item.tempHigh}
              />
            </div>
          ))}
        </div>
        {/* {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data ? (
              <div>
                <pre>{JSON.stringify(data)}</pre>
              </div>
            ) : (
              <p>No data available</p>
            )}
          </div>
            )}*/}
      </div>
    </>
  );
}

export default Weather;
