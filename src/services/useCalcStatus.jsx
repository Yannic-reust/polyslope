import { useEffect, useState } from "react";

const useCalcStatus = (props) => {
  const [openCount, setOpenCount] = useState(0);

  useEffect(() => {
    if (props && Array.isArray(props)) {
      let count = 0;

      for (let i = 0; i < props.length; i++) {
        const item = props[i];
        const { status } = item;

        if (status && status.toUpperCase() === "OPEN") {
          count += 1;
        }
      }

      setOpenCount(count);
    }
  }, [props]);

  return { openCount };
};

export default useCalcStatus;