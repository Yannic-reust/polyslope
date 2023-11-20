
import { useSelector } from "react-redux";
import AnimationsOnSVG from "../../assets/icons/animations.svg?react";
import AnimationsOffSVG from "../../assets/icons/animation-off.svg?react";

const AnimationsBadge = () => {
  const active = useSelector((state) => state.animation.value);
 

  return (
    <>
      <div
        className="w-20 h-20 rounded-full bg-darkblue/80  flex  justify-center items-center p-4 cursor-pointer"
      >
        {active && <AnimationsOnSVG className="w-8 " />}
        {!active && <AnimationsOffSVG className="w-8 " />}
      </div>
    </>
  );
};
export default AnimationsBadge;
