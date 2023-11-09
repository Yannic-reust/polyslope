import { useSelector, useDispatch } from "react-redux";
import { toggleAnimation } from "../store/animations/animationsState";
import AnimationsOnSVG from "../assets/icons/animations.svg?react";
import AnimationsStatus from "../components/AnimationsStatus/AnimationsStatus"
import InfoSVG from "../assets/icons/info.svg?react";

const StoreDemo = () => {
  const count = useSelector((state) => state.animation.value);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="w-20 h-20 rounded-full bg-darkblue/80  flex  justify-center items-center p-4"
        onClick={() => dispatch(toggleAnimation())}
      >
        <AnimationsOnSVG className="w-8 " />
      </div>
     <AnimationsStatus />
    
    </>
  );
};
export default StoreDemo;
