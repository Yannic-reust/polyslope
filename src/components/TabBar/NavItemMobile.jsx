const NavItemMobile = (props) => {

    // returns true if current tab is active and sidebar open
    const isTabActive = () => {
        return props.page === props.title && props.open;
    }

    return ( 
        <div onClick={ () => props.togglePage( props.title ) } className="flex flex-col items-center icon group cursor-pointer">
            <div className={`transition-colors duration-300 ${ isTabActive() ? "fill-accent" : "fill-white" }`}>
                { props.icon }
            </div>
            <span className={`text-label text-center mt-1 transition-all duration-300 ${ isTabActive() ? "text-accent" : "text-white" }`}>{ props.title }</span>
        </div>
     );
}
 
export default NavItemMobile;