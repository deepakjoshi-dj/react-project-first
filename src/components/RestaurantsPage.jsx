import { useEffect, useState } from "react";

const RestaurantsPage = () => {
  const RESTAURANT_API =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4343684&lng=78.4224553&restaurantId=485370&catalog_qa=undefined&submitAction=ENTER";
  const [restaurantData, setRestaurantData] = useState([]);
  const getRestaurantData = async (restaurantId = "") => {
    const response = await fetch(RESTAURANT_API);
    const json = await response.json();
    const recommendedRes =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
        ?.card?.itemCards;
    setRestaurantData(recommendedRes);
  };
  useEffect(() => {
    getRestaurantData();
  }, []);
  return (
    <div>
      <h1>Restaurants Page.</h1>
    </div>
  );
};

export default RestaurantsPage;
