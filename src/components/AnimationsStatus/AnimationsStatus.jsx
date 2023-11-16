import { useSelector } from "react-redux";
import InfoSVG from "../../assets/icons/info.svg?react";

const AnimationsStatus = () => {
  const active = useSelector((state) => state.animation.value);
  return (
    <>
      <div
        className={` ease-in-out duration-500 group ${
          active ? "is-active " : ""
        }`}
      >
        <div className="overflow-hidden duration-500 opacity-0 group-[.is-active]:opacity-100">
          <div className="bg-[#165185]  flex items-center p-4 w-48">
            <InfoSVG className="w-4 white" fill="white" />
            <p className="ml-4">Animatons paused</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AnimationsStatus;
