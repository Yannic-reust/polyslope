function Weather() {
  const elements = [
    "Sonnenscheindauer",
    "Niederschlag",
    "Wind",
    "Schnee Berg",
    "Schnee Tal",
    "Lawinengefahrenstufe",
  ];
  return (
    <>
      <div>
        {elements.map((element, index) => (
          <div key={index} className="flex place-content-between ">
            <p>{element}</p>
            <p className="font-semibold">asd</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Weather;
