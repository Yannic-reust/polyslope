const NavItem = (props) => {

    // returns true if current tab is active and sidebar open
    const isTabActive = () => {
        return props.page === props.title && props.open;
    }

    return (
        <div onClick={ () => props.togglePage( props.title ) } className="flex flex-col items-center icon group cursor-pointer">
            <div className={`group-hover:fill-accent transition-colors duration-300 ${ isTabActive() ? "fill-accent" : "fill-white" }`}>
                { props.icon }
            </div>
            <span className={`text-label text-center mt-1 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent ${ isTabActive() ? "opacity-100 text-accent" : "opacity-0" }`}>{ props.title }</span>
        </div>
     );
}

export default NavItem;