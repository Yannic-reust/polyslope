import { toggleIntro } from "../../store/intro/introState";
import { useDispatch } from "react-redux";


function Intro() {
  const dispatch = useDispatch();


  return (
    <>
      <div>
        <h2 className="text-h-md font-karmina">Tutorial</h2>
        <p className="mt-2">Aktivere das Tutorial</p>
        <button
          onClick={() =>  dispatch(toggleIntro())}
          className="bg-white/20 mt-4 hover:scale-110 text-white py-2 px-4 rounded"
        >
          Zeige das Tutorial
        </button>
      </div>
    </>
  );
}

export default Intro;
