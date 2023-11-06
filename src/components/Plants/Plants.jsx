import "./Plants.css";
import SidebarIntroduction from "../SidebarIntroduction/SidebarIntroduction";
import SidebarSection from "../SidebarSection/SidebarSection";
import CableCarVG from "../../assets/icons/cable-car.svg?react";
import BarSVG from "../../assets/icons/beer.svg?react";

function Plants() {
  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";
  const items = [
    {
      title: "Anlagen",
      text: "(0/12 geöffnet)",
      open: false,
      icon: <CableCarVG className={NAV_ICON_CLASSES} />,
    },
    {
      title: "Pisten",
      text: "(1/55 km geöffnet)",
      open: false,
      icon: <BarSVG className={NAV_ICON_CLASSES} />,
    },
  ];
  return (
    <>
      <div className="p-8">
        <SidebarIntroduction
          title="Geöffnete Anlagen"
          text="Hier finden Sie eine Übersicht der aktuell geöffneten Anlagen."
        />
        <div className="mb-8">
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
        </div>
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <SidebarSection item={item} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Plants;
