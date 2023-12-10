function Audio() {
  return (
    <>
      <div>
        <h2 className="text-h-md font-karmina">Musik</h2>
        <p className="mt-2">Aktivere die Musik</p>
        <label className="relative inline-flex items-center cursor-pointer mt-4">
          <input type="checkbox" value="" className="sr-only peer" />
          <div
            className="
            bg-white/20
          after:bg-white
          peer-checked:after:bg-darkblue
          peer-checked:after:border-white
          peer-checked:bg-white
          w-11 h-6  peer-focus:outline-none 
           rounded-full peer 
           peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
             after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
             after:border  after:rounded-full after:h-5 after:w-5 after:transition-all
              "
          ></div>
        </label>
      </div>
    </>
  );
}

export default Audio;
