import "./Plants.css";
import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import ContentSection from "../ContentSection/ContentSection";
import CableCarVG from "../../assets/icons/cable-car.svg?react";
import SkiSVG from "../../assets/icons/ski.svg?react";
import useCalcStatus from "../../services/useCalcStatus";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

function Plants() {
  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";

  const lift = useSelector((state) => state.lift.value);
  const track = useSelector((state) => state.track.value);

  const [ easyTracks, setEasyTracks] = useState([])
  const [ mediumTracks, setMediumTracks] = useState([])
  const [ hardTracks, setHardTracks] = useState([])

  useEffect(() => {
    const result = {
      EASY: [],
      HARD: [],
      MEDIUM: [],
    };
  
    track.forEach(item => {
      const difficulty = item.difficulty;
  
      if (['EASY', 'HARD', 'MEDIUM'].includes(difficulty)) {
        result[difficulty].push(item);
      }
      setEasyTracks(result.EASY)
      setMediumTracks(result.MEDIUM)
      setHardTracks(result.HARD)})

  }, [track]);

    const liftsText = {
    title: "Anlagen",
    text: `(${useCalcStatus(lift).openCount}/19 geöffnet)`,
    open: false,
    icon: <CableCarVG className={NAV_ICON_CLASSES} />,
  };
  const pistsText = {
    title: "Pisten",
    text: "",
    open: false,
    icon: <SkiSVG className={NAV_ICON_CLASSES} />,
  };

  return (
    <>
      <div>
        <ContentIntroduction
          title="Geöffnete Anlagen"
          text="Hier finden Sie eine Übersicht der aktuell geöffneten Anlagen."
        />

        <div className="">
          <ContentSection
            item={liftsText}
            data={[{title:"Bergbahnen", data: lift}]}
            camera={false}
         
            height={520}
          />
        </div>
      </div>
      <div id="pists">
        <ContentSection
          item={pistsText}
          data={[{title:"Blaue Pisten", data: easyTracks},{title:"Rote Pisten", data: mediumTracks} , {title:"Schwarze Pisten", data:hardTracks}]}
          camera={false}
     
          height={800}
        />
      </div>
    </>
  );
}

export default Plants;
