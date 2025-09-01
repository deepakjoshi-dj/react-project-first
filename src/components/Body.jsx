import RestaurantCard from "./RestaurantCard";
import { resList } from "../util/mockData";

const Body = () => {
  let resData = resList;
  console.log(resData);
  const filterHighRatingRestaurants = () => {
    resData = resData?.filter(
      (restaurant) => restaurant?.info?.avgRating > 4.2
    );
    console.log(resData);
  };
  return (
    <div className="main-body">
      <div className="search">
        <button
          onClick={() => {
            resData = resData?.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.2
            );
            console.log(resData);
          }}
          className="filter-button"
        >
          Higher Rating Restaurants
        </button>
      </div>
      <div className="res-container">
        {resData?.map((restaurant, idx) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
