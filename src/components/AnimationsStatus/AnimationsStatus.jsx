import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import InfoSVG from "../../assets/icons/info.svg?react";

const AnimationsStatus = () => {
  const status = useSelector((state) => state.animation.value);
  const isInitialRender = useRef(true);

  const [animationStatus, setAnimationStatus] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (!isInitialRender.current) {
      showMessage();
      setAnimationStatus(!status);
      console.log("Data changed:", status);
    } else {
      isInitialRender.current = false;
    }
  }, [status]);
  function showMessage() {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  }

  return (
    <>
      <div
        className={`ease-in-out duration-200 group ${
          message ? "is-active " : ""
        }`}
      >
        <div className="overflow-hidden duration-500 opacity-0 group-[.is-active]:opacity-100">
          <div className="bg-[#165185]  flex items-center p-4 w-48">
            <InfoSVG className="w-4 white" fill="white" />
            {animationStatus && <p className="ml-4">Animatons paused</p>}
            {!animationStatus && <p className="ml-4">Animatons on</p>}
          </div>
        </div>
      </div>
    </>
  );
};
export default AnimationsStatus;
