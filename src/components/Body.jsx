import RestaurantCard from "./RestaurantCard";
import RestaurantSkelton from "./RestaurantSkelton";
import { Link } from "react-router";
import useRestaurantMenu from "../util/useRestaurantMenu";

const Body = () => {
  const {
    loading,
    setSearchText,
    filterHighRatingRestaurants,
    filteredListRestaurants,
    searchRestaurant,
    searchText,
  } = useRestaurantMenu();
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
              <Link
                key={restaurant?.info?.id}
                to={`/restaurant/${restaurant?.info?.id}`}
              >
                <RestaurantCard resObj={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
