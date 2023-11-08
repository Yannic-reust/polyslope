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
        {loading ? (
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
        )}
      </div>
    </>
  );
}

export default Weather;
