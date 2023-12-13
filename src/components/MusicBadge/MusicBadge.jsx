import { useSelector } from "react-redux";
import AudioOnSVG from "../../assets/icons/audio-on.svg?react";
import AudioOffSVG from "../../assets/icons/audio-off.svg?react";

const AnimationsBadge = () => {
  const active = useSelector((state) => state.volume.value);
 

  return (
    <>
      <div
        className="w-20 h-20 rounded-full bg-white/20 flex justify-center items-center p-4 cursor-pointer"
      >
        {!active && <AudioOnSVG className="w-8" />}
        {active && <AudioOffSVG className="w-8 translate-y-[-2px]" />}
      </div>
    </>
  );
};
export default AnimationsBadge;