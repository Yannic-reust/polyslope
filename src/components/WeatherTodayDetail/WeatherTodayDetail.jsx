function WeatherTodayDetail(weather) {
  // console.log(weather.weather);
  const weatherData = [
    {name: "Bewölkung", data: weather.weather.cloud_cover+" %"},
    {name: "Schneefall", data:weather.weather.snowfall+" %"},
    {name: "Windgeschwindigkeit", data:weather.weather.wind_speed_10m+" km/h"},
    {name: "Regen", data:weather.weather.rain+" mm"},
    {name: "Aktuelle Temperatur", data:weather.weather.temperature_2m+" °C"},
    
    ];

 
  return (
    <>
      <div>
        {/* <p>{weatherData}</p> */}
         {weatherData.map((item, index) => (
          <div key={index} className="flex place-content-between ">
            <p>{item.name}</p>
            <p>{item.data}</p>
            {/* <p className="font-semibold">{element}</p> */}
          </div>
        ))} 
      </div>
    </>
  );
}

export default WeatherTodayDetail;
