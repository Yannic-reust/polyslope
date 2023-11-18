function Slopes() {
  const tempSlopeColors = ["Blau", "Rot", "Schwarz"];
  return (
    <>
      <div >
        <h2 className="text-h-md font-karmina">Pisten</h2>
        <p className="mt-2">Filter zum Anzeigen oder Deaktivieren von Skipisten.</p>
        <div className="mt-2">
          {tempSlopeColors.map((item, index) => (
            <div className="flex" key={index}>
              <input type="checkbox" className="checked:fill-white" />
              <p className="ml-2">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slopes;
