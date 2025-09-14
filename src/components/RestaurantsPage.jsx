import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../util/constants";

const ItemCategory =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const NestedItemCategory =
  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

const RestaurantsPage = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantItems, setRestaurantItems] = useState([]);
  const [viewAccordion, setViewAccordion] = useState(false);

  const getRestaurantData = async (restaurantId = "") => {
    const response = await fetch(RESTAURANT_API);
    const json = await response.json();

    let filteredRestaurantItems = json?.data?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length
    );
    filteredRestaurantItems =
      filteredRestaurantItems?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    filteredRestaurantItems = filteredRestaurantItems?.filter((item) =>
      [ItemCategory, NestedItemCategory]?.includes(item?.card?.card?.["@type"])
    );

    setRestaurantItems(filteredRestaurantItems);
    setRestaurantData(json?.data);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  const handleAccordion = () => {
    setViewAccordion((prev) => !prev);
  };

  return (
    <div>
      <h1>{restaurantData?.cards?.[0]?.card?.card?.text}</h1>

      <div className="accordion-wrapper">
        <button className="accordion-header" onClick={handleAccordion}>
          <div className="accordion-header--title">Recommended</div>
          <div className="accordion-header--action-icon">+/-</div>
        </button>
        <div className={`accordion-panel-${viewAccordion ? "view" : "none"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          reiciendis provident aliquam, pariatur animi soluta accusantium
          perferendis possimus praesentium vel eligendi repudiandae voluptas
          quaerat maxime quidem ab modi nam odio minima odit quae. Repudiandae
          dignissimos alias, iste minima voluptates facere maxime eos ex
          laudantium earum sed excepturi itaque blanditiis quisquam eaque
          perspiciatis natus dicta quam dolores aliquid facilis animi deleniti.
          Voluptas vel, architecto, autem in quam repellat impedit ipsam illum
          consequatur, quisquam quis ab laborum vero deleniti officia provident
          alias. Architecto repellendus officia deserunt at perspiciatis
          deleniti? Ex, vitae aut? At laborum cum obcaecati reprehenderit
          architecto voluptate, rem iusto minus?
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;
