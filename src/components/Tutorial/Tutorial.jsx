import { useState } from "react";
import { toggleIntro } from "../../store/intro/introState";
import { useDispatch, useSelector } from "react-redux";

import Content from "./Content";
import { toggleMusic } from "../../store/music/musicState";
import { setFirstTime } from "../../store/firstTime/firstTimeState";

const Tutorial = () => {
  const [menuState, setMenuState] = useState(0);
  const dispatch = useDispatch();

  const active = useSelector((state) => state.intro.value);
  const firstTime = useSelector((state) => state.firstTime.value);

  function increaseMenu(e) {
    if (e == 4) {
      dispatch(toggleIntro());
      if (firstTime) {
        dispatch(toggleMusic());
      }

      dispatch(setFirstTime(false));

      setMenuState(0);
    } else {
      setMenuState(e);
    }
  }
  function skip() {
    dispatch(toggleIntro());

    if (firstTime) {
      dispatch(toggleMusic());
    }
    dispatch(setFirstTime(false));
  }

  return (
    <div
      className={`w-screen h-screen bg-slate-300 backdrop-blur grid place-items-center ${
        !active ? "hidden" : "block"
      }`}
     
    >
      <div
        className="max-w-[450px] w-[95%] h-[350px] grid items-center bg-white/70"
        style={{ gridTemplateRows: "2fr 10fr 2fr 2fr" }}
       
      >
        <p
          className="justify-self-end px-4 font-thin text-xs text-black cursor-pointer"
          style={{ fontSize: "0.9em" }}
          id="tutorial"
          onClick={() => skip()}
         
        >
          Überspringen
        </p>

        <Content stage={menuState} />

        <input
          type="button"
          value="Weiter"
          className="px-6 py-2 cursor-pointer bg-darkblue justify-self-center min-w-[160px] h-max w-max row-start-3"
          onClick={() => increaseMenu(menuState + 1)}
        />

        <div className="row-start-4 justify-self-center w-max flex gap-[7px]">
          <div
            className={`w-[8px] h-[8px] rounded-full cursor-pointer ${
              menuState == 0 ? "bg-white" : "border-[1px]"
            }`}
            onClick={() => setMenuState(0)}
          ></div>
          <div
            className={`w-[8px] h-[8px] rounded-full cursor-pointer ${
              menuState == 1 ? "bg-white" : "border-[1px]"
            }`}
            onClick={() => setMenuState(1)}
          ></div>
          <div
            className={`w-[8px] h-[8px] rounded-full border-[1px] cursor-pointer ${
              menuState == 2 ? "bg-white" : "border-[1px]"
            }`}
            onClick={() => setMenuState(2)}
          ></div>
          <div
            className={`w-[8px] h-[8px] rounded-full border-[1px] cursor-pointer ${
              menuState == 3 ? "bg-white" : "border-[1px]"
            }`}
            onClick={() => setMenuState(3)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
