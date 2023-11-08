import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import { useState, useEffect } from "react";

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
          <div className="bg-white/20  col-span-2 p-8">
            <p>Heute</p>
          </div>
          <div className="bg-white/20  col-span-4 p-8">
            <p>Sonnenscheindauer</p>
            <p>Niederschlag</p>
            <p>Wind</p>
            <p>Schnee Berg</p>
            <p>Schnee Tal</p>
            <p>Lawinengefahrenstufe</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-4">
          <div className="bg-white/20  col-span-1 p-2">
            <p>Montag</p>
          </div>
          <div className="bg-white/20  col-span-1 p-2">
            <p>Dienstag</p>
          </div>
          <div className="bg-white/20  col-span-1 p-2">
            <p>Mittwoch</p>
          </div>
          <div className="bg-white/20  col-span-1 p-2">
            <p>Donnerstag</p>
          </div>
          <div className="bg-white/20  col-span-1 p-2">
            <p>Freitag</p>
          </div>
          <div className="bg-white/20  col-span-1 p-2">
            <p>Samstag</p>
          </div>
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
