import "./Restaurants.css";
import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import ContentSection from "../ContentSection/ContentSection";
import ResturantSVG from "../../assets/icons/food.svg?react";
import BarSVG from "../../assets/icons/beer.svg?react";

function Restaurants() {
  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";
  const items = [
    {
      title: "Resturants",
      text: "(0/12 geöffnet)",
      open: false,
      icon: <ResturantSVG className={NAV_ICON_CLASSES} />,
    },
    {
      title: "Bars",
      text: "(1/55 km geöffnet)",
      open: false,
      icon: <BarSVG className={NAV_ICON_CLASSES} />,
    },
  ];
  return (
    <>
      <div>
        <ContentIntroduction
          title="Unsere Bergrestaurants"
          text="In den Bergrestaurants unseres Skigebiets erwartet Sie Vielfalt pur. Ob für Jung oder Alt, hier findet jeder Gaumen das Passende. Geniessen Sie zudem in unseren Après-Ski-Bars das besondere Flair nach einem aufregenden Tag auf der Piste."
        />
        <div className="">
          {items.map((item, index) => (
            <div key={index}>
              <ContentSection item={item} icon={item.icon} camera={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Restaurants;
