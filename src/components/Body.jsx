import RestaurantCard from "./RestaurantCard";
import RestaurantSkelton from "./RestaurantSkelton";
import { Link } from "react-router";
import useRestaurantMenu from "../util/useRestaurantMenu";
import useOnlineStatus from "../util/useOnlineStatus";

const Body = () => {
  const {
    loading,
    setSearchText,
    filterHighRatingRestaurants,
    filteredListRestaurants,
    searchRestaurant,
    searchText,
  } = useRestaurantMenu();
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  if (!isOnline)
    return <h1>You're Offline! Please Check Your Internet Connection</h1>;
  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]?.map((item) => (
            <RestaurantSkelton key={item} />
          ))}
        </div>
      ) : (
        <div className="p-2 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="flex gap-1">
              <input
                className="border-2 rounded-[0.5rem] p-1"
                name="search-text"
                value={searchText}
                onChange={(e) => {
                  console.log(e);
                  setSearchText(e?.target?.value);
                }}
              />
              <button
                onClick={searchRestaurant}
                className="border-2 rounded-[0.5rem] p-1 px-3 hover:cursor-pointer hover:border-blue-800 hover:text-blue-700"
              >
                Search
              </button>
            </div>
            <button
              className="border-2 rounded-[0.5rem] p-1 px-3 hover:cursor-pointer hover:border-blue-800 hover:text-blue-700"
              onClick={filterHighRatingRestaurants}
            >
              Higher Rating Restaurants
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
