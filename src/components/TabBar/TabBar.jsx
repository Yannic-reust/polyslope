import { useEffect, useState } from "react";
import CableCarSVG from "../../assets/icons/cable-car.svg?react";
import FoodSVG from "../../assets/icons/food.svg?react";
import WheatherSVG from "../../assets/iconsWeather/weather-sunny-cloudy.svg?react";
import FilterSVG from "../../assets/icons/filter.svg?react";
import InfoSVG from "../../assets/icons/info.svg?react";
import MenuSVG from "../../assets/icons/menu-lined.svg?react"
import CloseSVG from "../../assets/icons/close.svg?react";

import About from "../About/About";
import NavItemMobile from "./NavItemMobile";
import Plants from "../Plants/Plants";
import Restaurants from "../Restaurants/Restaurants";
import InsideNav from "./InsideNav";
import Weather from "../Weather/Weather";

const TabBar = () => {
    const [ page, setPage ] = useState('');
    const [ subPage, setSubPage ] = useState('Filter');
    const [ open, setOpen ] = useState(false);
    const [ subMenuItems, setSubMenuItems ] = useState([]);

    const NAV_ICON_CLASSES = "w-9 max-h-8";
    const INSIDE_NAV_ICON_CLASSES = "w-6 max-h-4";

    const menuItems = [
        {
            title: "Anlagen",
            icon: <CableCarSVG className={NAV_ICON_CLASSES} />,
        },
        {
            title: "Restaurants",
            icon: <FoodSVG className={NAV_ICON_CLASSES} />,
        },
        {
            title: "Wetter",
            icon: <WheatherSVG className={NAV_ICON_CLASSES} />,
        },
        {
            title: "Mehr",
            icon: <MenuSVG className={NAV_ICON_CLASSES} />,
            childItems: [
                { title: "Einstellungen", icon: <FilterSVG className={INSIDE_NAV_ICON_CLASSES} /> },
                { title: "Info", icon: <InfoSVG className={INSIDE_NAV_ICON_CLASSES} /> },
            ]
        },
      ];

    useEffect(() => {
        if(page !== '') {

            // selects menuItem if current page has childItems (InsideNav)
            let menuItem = menuItems.find((menuItem) => menuItem.title === page && menuItem.childItems !== undefined);

            // checks if current menu entry has childItems and update subMenuItems
            if(menuItem) {
                setSubMenuItems(menuItem.childItems);
            } else {
                setSubMenuItems([]);
            }

        }
    }, [page])

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

    const toggleSubPage = (next) => {
        if(subPage != next) {
            setSubPage(next)
        }
    }

    return ( 
        <div className={`fixed visible tablet:hidden flex flex-col w-screen h-screen pointer-events-none`}>

            <div className={`flex flex-shrink-0 items-center justify-center h-16 w-full pointer-events-auto font-karmina bg-darkblue border-b border-white transition duration-300 ease-in-out ${ open ? "visible opacity-100" : "invisible opacity-0" }`}>
                <h2 className="text-h-sm text-center">{ page }</h2>
                <CloseSVG onClick={ () => setOpen(false) } className={`absolute cursor-pointer right-5 fill-white w-5 max-h-5`} />
            </div>

            <div className={`content w-full h-full overflow-y-scroll mb-20 pointer-events-auto p-5 backdrop-blur backdrop-brightness-90 bg-darkblue/80 transition duration-300 ease-in-out ${ open ? "visible opacity-100" : "invisible opacity-0" } `}>

                { subMenuItems.length > 0 &&
                    <div className="w-full mb-5 mt-[5px] flex flex-shrink-0 space-x-4">
                        { subMenuItems.map((childItem, index) => (
                            <InsideNav key={index} icon={ childItem.icon } title={ childItem.title } togglePage={ toggleSubPage } page={subPage} open={open} />
                        ))}
                    </div>
                }

                { /* main content */ }
                { page === 'Anlagen' && <Plants /> }
                { page === 'Restaurants' && <Restaurants /> }
                { page === 'Wetter' && <Weather /> }   

                { /* more content */ }
                { page === 'Mehr' && subPage === 'Einstellungen' && <h1>Filter</h1> }
                { page === 'Mehr' && subPage === 'Info' && <About /> }

            </div>

            <aside className={`fixed flex flex-col w-screen left-0 bottom-0 h-[80px] pointer-events-auto backdrop-blur backdrop-brightness-90 bg-darkblue/80 transition-all duration-500 ease-in-out`}>
                <nav className="w-full flex align-middle justify-between px-8 h-full bg-white/20 z-[999]">
                    { menuItems.map((menuItem, index) => (
                        <div key={ index } className="flex items-center">
                            <NavItemMobile icon={menuItem.icon} title={ menuItem.title } togglePage={togglePage} page={page} open={open} />
                        </div>
                    ))}
                </nav>
            </aside>
        </div>
     );
}
 
export default TabBar;