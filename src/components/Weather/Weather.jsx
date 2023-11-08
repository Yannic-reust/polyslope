import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import WeatherTodayDetail from "../WeatherTodayDetail/WeatherTodayDetail";
import WeatherTile from "../WeatherTile/WeatherTile";
import { useState, useEffect } from "react";
import SunnySVG from "../../assets/icons/sun.svg?react";

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const days = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "donnerstag",
    "freitag",
    "samstag",
  ];
  const NAV_ICON_CLASSES = "w-16  fill-white";

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
          <div className="bg-white/20  col-span-2 p-4">
          {/* { props.icon } */}
        <WeatherTile />
          </div>
          <div className="bg-white/20  col-span-4 p-8">
            <WeatherTodayDetail />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-4">
          {days.map((item, index) => (
            <div className="bg-white/20  col-span-1 p-2" key={index}>
              <p>{item}</p>
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
