function Panoramic() {
  return (
    <>
      <div>
        <h2 className="text-h-md font-karmina">Panoramafahrt</h2>
        <p className="mt-2">Aktiviert eine Animation welche die Kamera ums Skigebiet bewegt.</p>

        <div className="flex">
          <input type="checkbox" className="checked:fill-white" />
          <p className="ml-2">Rot</p>
        </div>
      </div>
    </>
  );
}

export default Panoramic;
