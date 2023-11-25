import { CDN_URL } from "../utils/constants";
const ItemList = ({ items, dummy }) => {
  console.log("dummy", dummy);
  return (
    <div>
      {items?.itemCards?.map((item) => {
        console.log("item", item);
        return (
          <div
            key={item.card?.info?.id}
            className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold ">{item?.card?.info?.name}</span>
                <span className="font-bold">
                  - ₹{item?.card?.info?.price / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>

            <div className="w-3/12 p-4 ">
              <button className="p-1 bg-black shadow-lg absolute mb-3 rounded-lg text-white">
                Add+
              </button>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
