import { useState } from "react";
import About from "./About";
import NavItem from "./NavItem";

const SideBar = () => {
    const [ page, setPage ] = useState('');
    const [ open, setOpen ] = useState(false)

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
        <div className="fixed flex w-screen h-screen pointer-events-none">
            <div onClick={ () => setOpen(false) } className={`w-full h-screen z-[100] ${open ? "pointer-events-auto" : "pointer-events-none"}`}></div>
            <aside className={`flex w-[900px] right-0 top-0 h-screen pointer-events-auto backdrop-blur backdrop-brightness-90 bg-darkblue/80 transition-all duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-[800px]"}`}>
                <nav className="w-[100px] pt-10 pb-10 flex flex-col h-full bg-white/20 z-[999]">
                <div className="flex flex-col items-center flex-grow-0 justify-start flex-1">
                    <div className="">
                        <NavItem icon="cable-car" title="Plants" togglePage={togglePage} page={page} open={open} />
                    </div>
                    <div className="my-5">
                        <NavItem icon="food" title="Restaurants" togglePage={togglePage} page={page} open={open} />
                    </div>
                    <div className="">
                        <NavItem icon="weather-sunny-cloudy" title="Weather" togglePage={togglePage} page={page} open={open} />
                    </div>
                </div>

                <div className="flex justify-center items-center flex-grow py-4">
                    <NavItem icon="filter" title="Filter" togglePage={togglePage} page={page} open={open} />
                </div>

                <div className="flex items-end justify-center py-4">
                    <NavItem icon="info" title="About" togglePage={togglePage} page={page} open={open} />
                </div>
                </nav>

                <div className="content w-[800px] p-10">
                    { page === 'about' &&  <About /> }
                </div>

            </aside>
        </div>
     );
}
 
export default SideBar;