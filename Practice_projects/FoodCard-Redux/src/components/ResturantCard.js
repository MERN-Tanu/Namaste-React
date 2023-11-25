import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
// import { listOfRestuarant } from "../../utils/data";

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

const ResturantCard = (props) => {
  //   console.log("prop", props);
  const { resData } = props;
  // console.log("resdata", resData);
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData;

  const { loggedInUser } = useContext(UserContext);

  console.log("logged", loggedInUser);
  return (
    <div className="m-4 p-4 w-[280px] min-h-[300px] rounded-lg bg-gray-200 hover:bg-green-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>

      {/* <h3>{resData?.data?.name}</h3>
  
        <h4>{resData?.data?.area}</h4>
        <h4>{resData?.data?.cuisines}</h4>
        <h4>{resData?.data?.deliveryTime}</h4>
        <h4>{resData?.data?.costForTwo}</h4> */}

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h4>⭐{avgRating} stars</h4>
      {/* <h4>{costForTwo} </h4> */}
      {/* Optional chaining */}
      <h4>⌚{sla?.deliveryTime} minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};
// Higher order Component

// input - Restuarant => ResturantCardPromoted

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
export default ResturantCard;
