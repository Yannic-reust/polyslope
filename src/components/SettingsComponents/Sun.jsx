function Sun() {
  return (
    <>
      <div>
        <h2 className="text-h-md font-karmina">Sonnenstand</h2>
        <p className="mt-2">
          Simulieren Sie den Sonnenstand um Sonnen- und Schattenhänge im Gebiet
          zu finden und so eine optimale Routenplanung machen zu können.
        </p>

        <input
          type="range"
          className="mt-8 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
    </>
  );
}

export default Sun;
