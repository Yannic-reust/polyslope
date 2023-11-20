import { useEffect, useState } from "react";

const useWeatherData = (props) => {
  const [tempLow, setLowest] = useState(null);
  const [tempHigh, setHighest] = useState(null);

  function roundNumbers(arr) {
    return arr.map((number) => {
      if (number >= 0.5) {
        return Math.ceil(number);
      } else {
        return Math.floor(number);
      }
    });
  }

  useEffect(() => {
    if (props && props.length === 24) {
      const lowest = Math.min(...roundNumbers(props));
      const highest = Math.max(...roundNumbers(props));
      setLowest(lowest);
      setHighest(highest);
    }
  }, [props]);

  return { tempLow, tempHigh };
};

export default useWeatherData;
