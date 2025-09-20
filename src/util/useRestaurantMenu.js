import { useEffect, useState } from "react";
import { HOMEPAGE_RESTAURANT_API } from "./constants";

const useRestaurantMenu = () => {
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
  return {
    loading,
    setSearchText,
    searchText,
    filteredListRestaurants,
    filterHighRatingRestaurants,
    searchRestaurant,
  };
};

export default useRestaurantMenu;
