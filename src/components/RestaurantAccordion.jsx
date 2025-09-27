import { useState } from "react";
import RestaurantMenuView from "./RestaurantMenuView";

const RestaurantAccordion = (props) => {
  const { title, itemCards } = props?.data;
  const [viewAccordion, setViewAccordion] = useState(true);
  const handleAccordion = () => {
    setViewAccordion((prev) => !prev);
  };
  console.log(viewAccordion);
  return (
    <div className="border-gray-50 border-b-[1rem]">
      <button
        className="w-full hover:cursor-pointer py-2 flex justify-between items-center"
        onClick={handleAccordion}
      >
        <div className="font-bold">
          {title} ({itemCards?.length})
        </div>
        <div className="text-2xl">{viewAccordion ? "⬆️" : "⬇️"}</div>
      </button>
      <div className={`${viewAccordion ? " block" : "hidden"}`}>
        {itemCards?.map((item, index) => (
          <RestaurantMenuView
            key={`${title}-${item?.card?.info?.name}-${index}`}
            menuData={item?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantAccordion;
