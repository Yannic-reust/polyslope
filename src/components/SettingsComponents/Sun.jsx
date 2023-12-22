import "./Sun.css";
import { setSun } from "../../store/sun/sunState";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Sun() {
  const dispatch = useDispatch();

  const [rangeValue, setRangeValue] = useState(3);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    dispatch(setSun(event.target.value ));
  };

  return (
    <>
      <div>
        <h2 className="text-h-md font-karmina">Sonnenstand</h2>
        <p className="mt-2">
          Simulieren Sie den Sonnenstand um Sonnen- und Schattenhänge im Gebiet
          zu finden und so eine optimale Routenplanung machen zu können.
          <span className="text-accent"> Diese Funktion ist zurzeit deaktiviert.</span>
        </p>

        <div className="relative mb-8 mt-8 flex items-center ">
          <div className="vertical-line" />
          <input
            type="range"
            value={rangeValue}
            onChange={handleRangeChange}
            min="0"
            max="4"
            disabled
            className="w-full bg-[lightgray] h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span className="text-sm text-[lightgray] dark:text-gray-400 absolute start-0 -bottom-6">
            08:00
          </span>
          <span className="text-sm text-[lightgray] dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            11:00
          </span>
          <span className="text-sm text-[lightgray] dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            14:00
          </span>
          <span className="text-sm text-[lightgray] dark:text-gray-400 absolute  start-3/4  -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            17:00
          </span>
          <span className="text-sm text-[lightgray] dark:text-gray-400 absolute end-0 -bottom-6">
            20:00
          </span>
          <div className="vertical-line bg-[lightgray]" />
        </div>
      </div>
    </>
  );
}

export default Sun;
