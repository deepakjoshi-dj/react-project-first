import { RESTAURANT_IMG } from "../util/constants";

const restaurantCardStyle = {
  width: "400px",
  backgroundColor: "#eae8e8",
  padding: "0.8rem",
  borderRadius: "1rem",
  flexWrap: "wrap",
};

const RestaurantCard = (props) => {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    props?.resObj?.info;
  return (
    <div style={restaurantCardStyle}>
      <div className="res-logo">
        <img
          alt="res-logo"
          height="100%"
          width="100%"
          src={RESTAURANT_IMG + cloudinaryImageId}
        />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{avgRatingString} rating</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
