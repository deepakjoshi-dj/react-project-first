import { useEffect, useState } from "react";
import { RESTAURANT_API, RESTAURANT_IMG } from "../util/constants";
import RestaurantSkelton from "./RestaurantSkelton";

const ItemCategory =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const NestedItemCategory =
  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

const RestaurantsPage = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantItems, setRestaurantItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRestaurantData = async (restaurantId = "") => {
    try {
      setLoading(true);
      const response = await fetch(RESTAURANT_API);
      const json = await response.json();
      debugger;

      let filteredRestaurantItems = json?.data?.cards?.find(
        (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length
      );
      filteredRestaurantItems =
        filteredRestaurantItems?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      filteredRestaurantItems = filteredRestaurantItems?.filter((item) =>
        [ItemCategory, NestedItemCategory]?.includes(
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

  if (loading) return <RestaurantSkelton />;

  return (
    <div>
      <h1>{restaurantData?.cards?.[0]?.card?.card?.text}</h1>

      <div style={{ padding: "1rem" }}>
        {restaurantItems?.map((restaurant, index) => {
          if (restaurant?.card?.card?.["@type"] === ItemCategory) {
            return (
              <RestaurantAccordion
                key={`${restaurant?.card?.card?.title}-${index}`}
                data={restaurant?.card?.card}
              />
            );
          }
          if (restaurant?.card?.card?.["@type"] === NestedItemCategory) {
            return (
              <div style={{ margin: "2rem 0" }}>
                <h2>{restaurant?.card?.card?.title}</h2>
                {restaurant?.card?.card?.categories?.map((restaurant) => (
                  <RestaurantAccordion
                    key={`${restaurant?.title}-${index}`}
                    data={restaurant}
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

const RestaurantAccordion = (props) => {
  const { title, itemCards } = props?.data;
  const [viewAccordion, setViewAccordion] = useState(false);
  const handleAccordion = () => {
    setViewAccordion((prev) => !prev);
  };
  return (
    <div className="accordion-wrapper">
      <button className="accordion-header" onClick={handleAccordion}>
        <div className="accordion-header--title">
          {title} ({itemCards?.length})
        </div>
        <div className="accordion-header--action-icon">+/-</div>
      </button>
      <div className={`accordion-panel-${viewAccordion ? "view" : "none"}`}>
        {itemCards?.map((item) => (
          <RestaurantMenuView
            key={item?.card?.info?.name}
            menuData={item?.card}
          />
        ))}
      </div>
    </div>
  );
};

const RestaurantMenuView = (props) => {
  const { name, price, offerTags, description, imageId } =
    props?.menuData?.info;
  return (
    <div className="restaurant-menu-card">
      <div>
        <div>{name}</div>
        <div>
          {price / 100} {offerTags?.[0]?.title} {offerTags?.[0]?.subTitle}
        </div>
        <div>{description}</div>
      </div>
      <div className="restaurant-menu-img-container">
        {imageId ? (
          <img
            height="100%"
            width="100%"
            src={RESTAURANT_IMG + imageId}
            alt={name}
          />
        ) : (
          <div>Add</div>
        )}
      </div>
    </div>
  );
};

export default RestaurantsPage;
