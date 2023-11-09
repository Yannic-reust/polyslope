import { useSelector, useDispatch } from "react-redux";
import { toggleAnimation } from "../store/animations/animationsState";

const StoreDemo = () => {
  const count = useSelector((state) => state.animation.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-darkblue">
        <p> asd</p>
        <button aria-label="Toggle" onClick={() => dispatch(toggleAnimation())}>
          Toggle
        </button>

        {count && <p>True{count}</p>}
        {!count && <p>False{count}</p>}
      </div>
    </div>
  );
};
export default StoreDemo;
