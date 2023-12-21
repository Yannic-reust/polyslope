import { useState } from "react";
import About from "../About/About";
import NavItem from "./NavItem";
import CableCarSVG from "../../assets/icons/cable-car.svg?react";
import FoodSVG from "../../assets/icons/food.svg?react";
import WheatherSVG from "../../assets/iconsWeather/weather-sunny-cloudy.svg?react";
import FilterSVG from "../../assets/icons/filter.svg?react";
import InfoSVG from "../../assets/icons/info.svg?react";
import CloseSVG from "../../assets/icons/close.svg?react";

import Plants from "../Plants/Plants";
import Restaurants from "../Restaurants/Restaurants";
import Weather from "../Weather/Weather";
import Settings from "../Settings/Settings";

const SideBar = ({setFocusFromOutside}) => {
    const [ page, setPage ] = useState('');
    const [ open, setOpen ] = useState(false)

    const NAV_ICON_CLASSES = "w-10 max-h-9"

    const togglePage = (next) => {
        if(page != next) {
            setPage(next)
            setOpen(true)
        } else if(page === next && !open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return ( 
        <div className="fixed hidden tablet:flex w-screen h-screen pointer-events-none">
            <div onClick={ () => setOpen(false) } className={`w-full h-screen z-[100] ${open ? "pointer-events-none" : "pointer-events-none"}`}></div>
            <aside className={`flex w-[900px] right-0 top-0 h-screen pointer-events-auto backdrop-blur backdrop-brightness-90 bg-darkblue/80 transition-all duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-[800px]"}`}>
                <nav className="w-[100px] pt-10 pb-10 flex flex-col h-full bg-white/20 z-[999]">
                <div className="flex flex-col space-y-5 items-center flex-grow-0 justify-start flex-1">
                    <div>
                        <NavItem icon={<CableCarSVG className={NAV_ICON_CLASSES} />} title="Anlagen" togglePage={togglePage} page={page} open={open} />
                    </div>
                    <div>
                        <NavItem icon={<FoodSVG className={NAV_ICON_CLASSES} />} title="Restaurants" togglePage={togglePage} page={page} open={open} />
                    </div>
                    <div>
                        <NavItem icon={<WheatherSVG className={NAV_ICON_CLASSES} />} title="Wetter" togglePage={togglePage} page={page} open={open} />
                    </div>
                </div>

                <div className="flex justify-center items-center flex-grow">
                    <NavItem icon={<FilterSVG className={NAV_ICON_CLASSES} />} title="Einstellungen" togglePage={togglePage} page={page} open={open} />
                </div>

                <div className="flex items-end justify-center">
                    <NavItem icon={<InfoSVG className={NAV_ICON_CLASSES} />} title="Info" togglePage={togglePage} page={page} open={open} />
                </div>
                </nav>

                <CloseSVG onClick={ () => setOpen(false) } className={`absolute cursor-pointer top-10 right-10 fill-white w-6 max-h-6`} data-testid="close-icon"/>

                <div className="content w-[800px] p-10 overflow-auto">
                    { page === 'Info' &&  <About /> }
                    { page === 'Anlagen' &&  <Plants setFocusFromOutside={setFocusFromOutside} /> }
                    { page === 'Restaurants' &&  <Restaurants /> }
                    { page === 'Wetter' &&  <Weather /> }
                    { page === 'Einstellungen' &&  <Settings /> }
                </div>
              

            </aside>
        </div>
     );
}
 
export default SideBar;