const InsideNav = (props) => {

    // returns true if current tab is active and sidebar open
    const isTabActive = () => {
        return props.page === props.title && props.open;
    }

    return ( 
        <nav className={`flex items-center w-1/2 h-10 transition-colors duration-300 ${ isTabActive() ? "bg-white/40" : "bg-white/20" }`}>
            <div onClick={ () => props.togglePage( props.title ) } className="flex items-center w-full p-3 icon group cursor-pointer">
                <div className={`mr-1 fill-white`}>
                    { props.icon }
                </div>
                <span className={`text-label text-white transition-all duration-300 `}>{ props.title }</span>
            </div>
        </nav>
     );
}
 
export default InsideNav;