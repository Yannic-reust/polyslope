import ContentIntroduction from "../ContentIntroduction/ContentIntroduction";
import Panoramic from "../SettingsComponents/Panoramic";
import Slopes from "../SettingsComponents/Slopes";
import Sun from "../SettingsComponents/Sun";
import Performance from "../SettingsComponents/Performance";
import Intro from "../SettingsComponents/Intro";
import Audio from "../SettingsComponents/Audio";


function Settings() {



  return (
    <>
      <div>
        <ContentIntroduction
          title="Einstellungen"
          text="Hier finden Sie unterschiedliche Optionen um Eigenschaften der Skimap zu verändern."
        />
        <div >
          <Sun />
        </div>
        <div className="mt-8">
          <Slopes />
        </div>
        <div className="mt-8">
          <Intro />
        </div>
        <div className="mt-8">
          <Audio />
        </div>
        {/* <div className="mt-8">
          <Panoramic />
        </div> */}
        <div className="mt-8">
          <Performance />
        </div>
      </div>
    </>
  );
}

export default Settings;
