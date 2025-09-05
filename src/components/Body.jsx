import RestaurantCard from "./RestaurantCard";
import { resList } from "../util/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  console.log(useState([]));

  const filterHighRatingRestaurants = () => {
    const filteredRestaurants = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setListOfRestaurants(filteredRestaurants);
  };

  const api =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4343684&lng=78.4224553&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const getRestaurantData = async () => {
    console.log("function called");
    const data = await fetch(api);
    const json = await data.json();

    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
  };
  useEffect(() => {
    console.log("Hello useEffect executed.");
    getRestaurantData();
  }, []);

  return (
    <div className="main-body">
      <div className="search">
        <button onClick={filterHighRatingRestaurants} className="filter-button">
          Higher Rating Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant, idx) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
