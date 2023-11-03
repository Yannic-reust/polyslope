const NavItem = (props) => {
    return ( 
        <div onClick={ () => props.togglePage( props.title.toLowerCase() ) } className="flex flex-col items-center icon group cursor-pointer">
            <img className="w-10 max-h-9" alt={ props.title } src={"/src/assets/icons/" + props.icon + ".svg"} />
            <span className={`text-label text-center mt-1 transition-opacity duration-300 group-hover:opacity-100 ${ props.page === props.title.toLowerCase() && props.open ? "opacity-100" : "opacity-0" }`}>{ props.title }</span>
        </div>
     );
}
 
export default NavItem;