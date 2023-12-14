function Performance() {
  return (
    <>
      <div>
        <h2 className="text-h-md font-karmina">Performance</h2>
        <p className="mt-2">
          Wenn Ihr Gerät nicht genügend Leistung hat können Sie den
          Low-Performance Mode aktivieren und zusätzliche Details zur Leistung
          einblenden.
        </p>
        <div className="mt-4">
          <div className="flex">
            <input type="checkbox" className="checked:fill-white" />
            <p className="ml-2">Low-Performance Mode</p>
          </div>
          <div className="flex">
            <input type="checkbox" className="checked:fill-white" />
            <p className="ml-2">Leistungsinformationen</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Performance;
