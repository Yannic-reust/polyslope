import "./sidebarElement.css";

const SidebarElement = () => {
  return (
    <div className="bg-blue-50 p-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/iconsSidebarElements/restaurant.png"
            alt=""
            className="w-12 "
          />
          <div className="flex items-baseline">
            <h2 className="ml-4 text-3xl">Anlagen</h2>
            <p className="ml-4">(0/12 geöffnet)</p>
          </div>
        </div>
        <img
          src="/iconsSidebarElements/restaurant.png"
          alt="icon open"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default SidebarElement;
