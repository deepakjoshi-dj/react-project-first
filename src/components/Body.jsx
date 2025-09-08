import RestaurantCard from "./RestaurantCard";
// import { resList } from "../util/mockData";
import { useState, useEffect } from "react";
import RestaurantSkelton from "./restaurantSkelton";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterHighRatingRestaurants = () => {
    const filteredRestaurants = listOfRestaurants?.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    setListOfRestaurants(filteredRestaurants);
  };

  const api =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4343684&lng=78.4224553&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const getRestaurantData = async () => {
    try {
      setLoading(true);
      const data = await fetch(api);
      const json = await data.json();

      const restaurants = json?.data?.cards?.find(
        (item) => item?.card?.card?.id === "restaurant_grid_listing_v2"
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // console.log("Hello useEffect executed.");
    getRestaurantData();
  }, []);

  // if (loading) return <RestaurantSkelton />;
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
            <button
              onClick={filterHighRatingRestaurants}
              className="filter-button"
            >
              Higher Rating Restaurants
            </button>
          </div>
          <div className="res-container">
            {listOfRestaurants?.map((restaurant, idx) => (
              <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
