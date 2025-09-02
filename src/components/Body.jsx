import RestaurantCard from "./RestaurantCard";
import { resList } from "../util/mockData";
import { useState } from "react";

const Body = () => {
  console.log("page rendered.");
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log(useState([]));

  console.log(listOfRestaurants);
  const filterHighRatingRestaurants = () => {
    const filteredRestaurants = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setListOfRestaurants(filteredRestaurants);
  };
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
