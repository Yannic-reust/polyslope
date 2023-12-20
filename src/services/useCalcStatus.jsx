import { useEffect, useState } from "react";

const useCalcStatus = (props) => {
  const [openCount, setOpenCount] = useState(null);
console.log(props)
  useEffect(() => {
    let openCount = 0;

    for (const item of props) {
      const { status } = item;

      if (status && status.toUpperCase() === "OPEN") {
        setOpenCount((openCount += 1));
      }
    }
  }, [props, openCount]);

  return { openCount };
};

export default useCalcStatus;
