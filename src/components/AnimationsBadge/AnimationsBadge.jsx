import { useDispatch } from "react-redux";
import { toggleAnimation } from "../../store/animations/animationsState";
import AnimationsOnSVG from "../../assets/icons/animations.svg?react";


const AnimationsBadge = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="w-20 h-20 rounded-full bg-darkblue/80  flex  justify-center items-center p-4 cursor-pointer"
        onClick={() => dispatch(toggleAnimation())}
      >
       
        <AnimationsOnSVG className="w-8 " />
     
      
      </div>
    
    </>
  );
};
export default AnimationsBadge;
