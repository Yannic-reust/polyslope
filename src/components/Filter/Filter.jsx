import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import Panoramic from "../SettingsComponents/Panoramic";
import Slopes from "../SettingsComponents/Slopes";
import Sun from "../SettingsComponents/Sun";
import Performance from "../SettingsComponents/Performance";

function Restaurants() {
  return (
    <>
      <div>
        <ContentIntroduction
          title="Einstellungen und Filter"
          text="Hier finden Sie unterschiedliche Optionen um Eigenschaften der Skimap zu verändern."
        />
        <div >
          <Sun />
        </div>
        <div className="mt-8">
          <Slopes />
        </div>
        <div className="mt-8">
          <Panoramic />
        </div>
        <div className="mt-8">
          <Performance />
        </div>
      </div>
    </>
  );
}

export default Restaurants;
