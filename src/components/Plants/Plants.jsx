import "./Plants.css";
import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import ContentSection from "../ContentSection/ContentSection";
import CableCarVG from "../../assets/icons/cable-car.svg?react";
import SkiSVG from "../../assets/icons/ski.svg?react";
import { useSelector } from "react-redux";
import useCalcStatus from "../../services/useCalcStatus";

function Plants() {
  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";

  const lift = useSelector((state) => state.lift.value);
  
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
        {/* <div className="mb-8">
          <ul>
            <li className="flex">
              <p>Lawinenwarnstufe: </p>
              <p className="ml-1">-</p>
            </li>
            <li className="flex">
              <p>Neuschnee seit 24h: </p>
              <p className="ml-1">0cm</p>
            </li>
            <li className="flex">
              <p>Schneehöhe Berg (2970 m): </p>
              <p className="ml-1">0cm</p>
            </li>
            <li className="flex">
              <p>LSchneehöhe Tal (1638 m): </p>
              <p className="ml-1">0cm</p>
            </li>
          </ul>
        </div> */}

        <div className="">
          <ContentSection
            item={liftsText}
            data={lift}
            camera={false}
            title={"Bergbahnen"}
            height={520}
          />
        </div>
      </div>
      <div id="pists">
        <ContentSection
          item={pistsText}
          data={lift}
          camera={false}
          title={"Pisten"}
          height={800}
        />
      </div>
    </>
  );
}

export default Plants;
