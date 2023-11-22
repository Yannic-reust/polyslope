import { useEffect, useState } from "react";

const useDayData = () => {
  const [daysArray, setDays] = useState(null);

  useEffect(() => {
    const days = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    const today = new Date().getDay();
    const nextSixDays = [];

    for (let i = 1; i < 7; i++) {
      const nextDayIndex = (today + i) % 7;
      nextSixDays.push(days[nextDayIndex]);
    }

    setDays(nextSixDays);
  }, []);

  return { daysArray };
};

export default useDayData;
