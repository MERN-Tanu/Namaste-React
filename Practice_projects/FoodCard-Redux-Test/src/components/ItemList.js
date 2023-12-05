// import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
// import cartSlice from "../utils/cartSlice";
const ItemList = ({ items, dummy }) => {
  // console.log("dummy", dummy);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an Action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => {
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
              <button
                className="p-1 bg-black shadow-lg absolute mb-3 rounded-lg text-white"
                // homework
                // onClick={handleAddItem}
                // onClick ={handleAddItem(item)}
                onClick={() => handleAddItem(item)}>
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
