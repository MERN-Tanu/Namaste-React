import { useState } from "react";
import ItemList from "./ItemList";
// import cartSlice from "../utils/cartSlice";

const RestuarnatCategory = (props, dummy) => {
  const [showItems, setshowItems] = useState(false);

  const { itemCards } = props;
  const handleClick = () => {
    // console.log("clicked");
    setshowItems(!showItems);
  };
  //   console.log("itemCard", itemCards);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        {/* Header Section */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg">
            {itemCards.title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && (
          <ItemList items={itemCards?.["itemCards"]} dummy={dummy} />
        )}
      </div>
    </div>
  );
};
export default RestuarnatCategory;
{
  /* ResCategory */
}
{
  /* Accordian Body */
}
