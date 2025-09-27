import { useEffect, useState } from "react";
import {
  ITEM_CATEGORY,
  NESTED_ITEM_CATEGORY,
  RESTAURANT_API,
  RESTAURANT_IMG,
} from "../util/constants";
import RestaurantSkelton from "./RestaurantSkelton";
import { useParams } from "react-router";
import RestaurantAccordion from "./RestaurantAccordion";

const RestaurantsPage = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantItems, setRestaurantItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { resId } = useParams();
  console.log(resId);
  const getRestaurantData = async () => {
    try {
      setLoading(true);
      const response = await fetch(RESTAURANT_API + resId);
      const json = await response.json();

      let filteredRestaurantItems = json?.data?.cards?.find(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length
      );
      filteredRestaurantItems =
        filteredRestaurantItems?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      filteredRestaurantItems = filteredRestaurantItems?.filter((item) =>
        [ITEM_CATEGORY, NESTED_ITEM_CATEGORY]?.includes(
          item?.card?.card?.["@type"]
        )
      );

      setRestaurantItems(filteredRestaurantItems);
      setRestaurantData(json?.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  console.log(restaurantItems);

  if (loading)
    return (
      <div className="flex justify-center">
        <div className="inline-flex">
          <RestaurantSkelton />
          <RestaurantSkelton />
        </div>
      </div>
    );

  return (
    <div>
      <h1>{restaurantData?.cards?.[0]?.card?.card?.text}</h1>

      <div className=" m-auto w-full md:w-1/2 ">
        {restaurantItems?.map((restaurant, index) => {
          if (restaurant?.card?.card?.["@type"] === ITEM_CATEGORY) {
            return (
              <RestaurantAccordion
                key={`${restaurant?.card?.card?.title}-${index}`}
                data={restaurant?.card?.card}
              />
            );
          }
          if (restaurant?.card?.card?.["@type"] === NESTED_ITEM_CATEGORY) {
            return (
              <div style={{ margin: "2rem 0" }}>
                <div className="text-xl">{restaurant?.card?.card?.title}</div>
                {restaurant?.card?.card?.categories?.map((item) => (
                  <RestaurantAccordion
                    key={`${restaurant?.card?.card?.title}-${item?.title}-${index}`}
                    data={item}
                  />
                ))}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantsPage;
