import { RESTAURANT_IMG } from "../util/constants";

const RestaurantMenuView = (props) => {
  const { name, defaultPrice, price, offerTags, description, imageId } =
    props?.menuData?.info;
  console.log(props?.menuData?.info);
  return (
    <div className="flex justify-between p-2 border-b border-gray-300">
      <div>
        <div className="text-lg font-bold">{name}</div>
        <div className="text-sm">
          ₹ {(price ?? defaultPrice) / 100} {offerTags?.[0]?.title}{" "}
          {offerTags?.[0]?.subTitle}
        </div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
      <div>
        {imageId ? (
          <div className=" h-35 relative">
            <div className="h-30 w-40 rounded-2xl overflow-hidden">
              <img
                className="h-full w-full"
                src={RESTAURANT_IMG + imageId}
                alt={name}
              />
            </div>
            <button className="bottom-[-2] left-5.5 absolute p-1 px-10 text-lg text-green-700 border border-gray-300 shadow font-semibold rounded-[0.5rem] hover:cursor-pointer hover:bg-gray-100 bg-white">
              Add
            </button>
          </div>
        ) : (
          <div className="p-1 mr-4 px-10 text-lg text-green-700 border border-gray-300 shadow font-semibold rounded-[0.5rem] hover:cursor-pointer hover:bg-gray-100 bg-white">
            Add
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuView;
