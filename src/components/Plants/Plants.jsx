import "./Plants.css";
import SidebarIntroduction from "../SidebarIntroduction/SidebarIntroduction";
import SidebarSection from "../sidebarSection/sidebarSection";

function Plants() {
  const items = [
    {
      icon: "",
      title: "Anlagen",
      text: "(0/12 geöffnet)",
      open: false,
    },
    {
      icon: "",
      title: "Pisten",
      text: "(1/55 km geöffnet)",
      open: false,
    },
  ];

  return (
   <> 
      <SidebarIntroduction
        title="Geöffnete Anlagen"
        text="Hier finden Sie eine Übersicht der aktuell geöffneten Anlagen."
      />
      <div className="p-8 pt-0">
        <ul>
          <li>Lawinenwarnstufe</li>
          <li>Neuschnee seit 24h</li>
          <li>Schneehöhe Berg (2970 m)</li>
          <li>Schneehöhe Tal (1638 m)</li>
        </ul>
      </div>
      <div className="m-4 mt-0 ml-8 mr-8">
        {items.map((item, index) => (
          <div key={index}>
            <SidebarSection item={item} />
          </div>
        ))}
      </div>
   </>
  );
}

export default Plants;
