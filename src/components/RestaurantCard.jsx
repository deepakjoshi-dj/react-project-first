import { RESTAURANT_IMG } from "../util/constants";

const RestaurantCard = (props) => {
  const { name, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    props?.resObj?.info;
  return (
    <div className="h-full flex flex-col hover:scale-95 transition duration-700 ease-in-out">
      <div className="h-50 rounded-2xl overflow-hidden">
        <img
          alt="res-logo"
          className="h-full w-full"
          src={RESTAURANT_IMG + cloudinaryImageId}
        />
      </div>
      <div className="pl-2">
        <div className="font-extrabold">{name}</div>
        <div className="font-semibold">{avgRatingString} rating</div>
        <div className="text-gray-500">{cuisines?.join(", ")}</div>
        <div className="text-gray-400">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
