import RestaurantCard from "./RestaurantCard";
import { resList } from "../util/mockData";

const Body = () => {
  return (
    <div className="main-body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList?.map((restaurant, idx) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
