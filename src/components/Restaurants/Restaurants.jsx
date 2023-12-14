import "./Restaurants.css";
import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import ContentSection from "../ContentSection/ContentSection";
import RestaurantsSVG from "../../assets/icons/food.svg?react";
//import BarSVG from "../../assets/icons/beer.svg?react";
import { useSelector } from "react-redux";
import useCalcStatus from "../../services/useCalcStatus";

function Restaurants({setFocusFromOutside}) {
  const NAV_ICON_CLASSES = "w-8 max-h-7 fill-white";

  const restaurant = useSelector((state) => state.restaurant.value);
  
  const restaurantText = {
    title: "Restaurants",
    text: `(${useCalcStatus(restaurant).openCount}/9 geöffnet)`,
    open: false,
    icon: <RestaurantsSVG className={NAV_ICON_CLASSES} />,
  };

 /* const barsText = {
    title: "Bars",
    text: "(2/12 geöffnet)",
    open: false,
    icon: <BarSVG className={NAV_ICON_CLASSES} />,
  };*/

  return (
    <>
      <div id="restaurants">
        <ContentIntroduction
          title="Unsere Bergrestaurants"
          text="In den Bergrestaurants unseres Skigebiets erwartet Sie Vielfalt pur. Ob für Jung oder Alt, hier findet jeder Gaumen das Passende. Geniessen Sie zudem in unseren Après-Ski-Bars das besondere Flair nach einem aufregenden Tag auf der Piste."
        />
        <div id="restaurant">
          <ContentSection
            item={restaurantText}
            data={[{title:"", data:restaurant}]}
            camera={false}
            title={"Berg Restaurats"}
            setFocusFromOutside={setFocusFromOutside}
          />
        </div>
      </div>
      {/* <div id="bars">
        <ContentSection
          item={barsText}
          data={restaurant}
          camera={false}
          title={"Bars"}
        />
      </div> */}
    </>
  );
}

export default Restaurants;
