import { useEffect } from "react";
import { setRestaurants } from "../store/restaurant/restaurantState";
import { useDispatch } from "react-redux";

const useAPIData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.jungfrau.ch/api/resort/v01/winter/overview"
        );
        const newData = await response.json();

        dispatch(setRestaurants(newData.data.resorts[2].restaurants));
      } catch (error) {
        const existingDataResponse = await fetch(
          "../../public/backup_data.json"
        );
        const existingData = await existingDataResponse.json();
        dispatch(setRestaurants(existingData.restaurants));
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);
};

export default useAPIData;
