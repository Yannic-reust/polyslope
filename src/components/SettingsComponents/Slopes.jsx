import { useDispatch } from "react-redux";
import { toggleSlope } from "../../store/slopesActive/slopesActiveState";

function Slopes() {
  const slopeColors = ["Gelb", "Blau", "Rot", "Schwarz"];

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2 className="text-h-md font-karmina">Pisten</h2>
        <p className="mt-2">
          Filter zum Anzeigen oder Deaktivieren von Skipisten.
        </p>
        <div className="mt-2">
          {slopeColors.map((item, index) => (
            <div className="flex" key={index}>
              <input
                type="checkbox"
                defaultChecked={true}
                className="checked:fill-white"
                onChange={() => dispatch(toggleSlope(item))}
              />
              <p className="ml-2">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slopes;
