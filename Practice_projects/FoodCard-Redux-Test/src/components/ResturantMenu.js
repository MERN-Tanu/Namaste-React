import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestuarnatCategory from "./ResturantCategory";

const ResturantMenu = () => {
  //   const [resInfo, setresInfo] = useState(null);
  //   const { resId } = useParams;

  // Use of Custom Hook
  const { resId } = useParams();

  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(
  //       "https://run.mocky.io/v3/15fb4364-3933-48e9-9008-a179ce880436"
  //     );

  //     const json = await data.json();
  //     // console.log("json", json);

  //     setresInfo(json.data);
  //   };
  if (resInfo === null) return <ShimmerUI />;

  //   const renderData = resInfo?.cards?.[0]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("resinfo", resInfo);

  console.log("categories", categories);
  //   console.log("resInfois", resInfo);
  // console.log("itemcards", itemCards);
  //   console.log("itemcards", itemCards);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines?.join(",")}</p>
      {/* <button>Add to Cart</button> */}
      {/* Categories */}
      {/* this is controlled component */}
      {categories.map((category, index) => (
        <RestuarnatCategory
          key={index}
          itemCards={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}

      {/* <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2> */}
      {/* <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} -{"Rs."}{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })} */}
      {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>{itemCards[2]?.card?.info?.name}</li>
        <li>Burgers</li>
        <li>Diet Coke</li> */}
      {/* </ul> */}
    </div>
  );
};

export default ResturantMenu;
