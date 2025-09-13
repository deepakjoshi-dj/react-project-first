import RestaurantCard from "./RestaurantCard";
// import { resList } from "../util/mockData";
import { useState, useEffect } from "react";
import RestaurantSkelton from "./restaurantSkelton";
import { HOMEPAGE_RESTAURANT_API } from "../util/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListRestaurants, setFilteredListRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getRestaurantData = async () => {
    try {
      setLoading(true);
      const data = await fetch(HOMEPAGE_RESTAURANT_API);
      const json = await data.json();

      const restaurants = json?.data?.cards?.find(
        (item) => item?.card?.card?.id === "restaurant_grid_listing_v2"
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants);
      setFilteredListRestaurants(restaurants);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRestaurantData();
  }, []);

  const filterHighRatingRestaurants = () => {
    const filteredRestaurants = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setFilteredListRestaurants(filteredRestaurants);
  };

  const searchRestaurant = () => {
    const filteredRestaurants = listOfRestaurants?.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setFilteredListRestaurants(filteredRestaurants);
  };

  return (
    <>
      {loading ? (
        <div className="restaurant-skelton-body">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item) => (
            <RestaurantSkelton key={item} />
          ))}
        </div>
      ) : (
        <div className="main-body">
          <div className="search">
            <div className="search">
              <input
                name="search-text"
                value={searchText}
                onChange={(e) => {
                  console.log(e);
                  setSearchText(e?.target?.value);
                }}
                className="filter-button"
              />
              <button onClick={searchRestaurant} className="filter-button">
                Search
              </button>
            </div>
            <button
              onClick={filterHighRatingRestaurants}
              className="filter-button"
            >
              Higher Rating Restaurants
            </button>
          </div>
          <div className="res-container">
            {filteredListRestaurants?.map((restaurant, idx) => (
              <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
