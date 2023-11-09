import { useSelector } from "react-redux";
import InfoSVG from "../../assets/icons/info.svg?react";

const AnimationsStatus = () => {
  const active = useSelector((state) => state.animation.value);
  return (
    <>
      {active && (
        <div className="bg-[#165185]  flex items-center p-4 w-48">
          <InfoSVG className="w-4 white" fill="white" />
          <p className="ml-4">Animatons paused</p>
        </div>
      )}
    </>
  );
};
export default AnimationsStatus;
