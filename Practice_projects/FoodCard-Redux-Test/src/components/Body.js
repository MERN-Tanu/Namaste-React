import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
// import { resList } from "../utils/data";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // local state variable - super powerful variable
  //   let resList = [
  //     {
  //       data: {
  //         type: "F",
  //         id: "74453",
  //         name: "KFC",
  //         uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //         city: "21",
  //         area: "Athwa",
  //         totalRatingsString: "1000+ ratings",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         tags: [],
  //         costForTwo: 40000,
  //         costForTwoString: "₹400 FOR TWO",
  //         deliveryTime: 45,

  //         promoted: false,
  //         avgRating: "3.8",
  //       },
  //     },
  //     {
  //       data: {
  //         type: "F",
  //         id: "74453",
  //         name: "KFC",
  //         uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //         city: "21",
  //         area: "Athwa",
  //         totalRatingsString: "1000+ ratings",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         tags: [],
  //         costForTwo: 40000,
  //         costForTwoString: "₹400 FOR TWO",
  //         deliveryTime: 45,

  //         promoted: false,
  //         avgRating: "3.8",
  //       },
  //     },
  //   ];

  // reslist will update the listOfResturant

  const [listOfRestuarant, setlistRestuanrant] = useState([]);
  const [fileredListRest, setfileredListRest] = useState([]);
  const [searchText, setsearchText] = useState("");

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);
  // whenever state variables update , react triggers a reconciliation cycle (re-render the component)
  console.log("body rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://run.mocky.io/v3/f16b3f55-7130-4031-9d75-d9c42f8aafca"
    );
    // console.log("fetch", data);
    const json = await data.json();
    // console.log("json", json);
    setlistRestuanrant(
      // Optional chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfileredListRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  const { loggedInUser, setuserInfo } = useContext(UserContext);
  // if (listOfRestuarant.length === 0) {
  //   return <ShimmerUI />;
  // } or

  // console.log(
  //   "Understand this is very important it will print first then --useEffect called will print---"
  // );
  return listOfRestuarant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body bg-gradient-to-r from-rose-100 via-fuchsia-100 to-indigo-100">
      <div className="filter flex">
        <div className="search m-4 p-4 rounded-lg">
          <input
            type="text"
            className="border border-solid border-blue-400 rounded-2xl w-30 h-3 p-4"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
              // console.log("searchtext", searchText);
            }}
          />
          <button
            className="px-3 py-1 m-2 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white"
            onClick={() => {
              // filter the restuant card and update the ui
              // searchText

              // console.log(searchText);

              const filterResturant = listOfRestuarant.filter((el) => {
                return el.info?.name
                  .toLowerCase()
                  .includes(searchText?.toLowerCase());
              });
              setfileredListRest(filterResturant);
              console.log("filterrest", searchText, filterResturant);
            }}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 text-white py-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  rounded-lg hover:max-lg h-8"
            onClick={() => {
              // filter logic here
              // res = ele, ele will iterarte listOfResturanat
              let fileredListRest = listOfRestuarant.filter((res) => {
                // console.log("res", res);
                return res.info.avgRating > 4.5;
              });
              // console.log("filterlist", filterList);
              setfileredListRest(fileredListRest);
            }}>
            Top Rated Restaurant
          </button>
        </div>
        <label className=" p-10 text-amber-950">UserName:</label>
        <input
          className="w-30 h-3 p-4 ml-[-27px] mt-[35px] border border-blue-600 rounded-full bg-blue-100"
          value={loggedInUser}
          onChange={(e) => {
            setuserInfo(e.target.value);
          }}></input>
      </div>

      <div className="flex flex-wrap ">
        {fileredListRest.map((resturantElement, index, resList) => {
          {
            /* console.log("listdata", listOfRestuarant); */
          }
          {
            /* console.log(resturantElement, index); */
          }

          {
            /* console.log("res", resturantElement); */
          }
          return (
            <Link
              to={"/resturant/" + resturantElement.info.id}
              key={resturantElement.info.id}>
              {" "}
              {/* if the resturant is promoted then , add a promoted label to it */}
              {resturantElement.info?.veg ? (
                <ResturantCardPromoted resData={resturantElement.info} />
              ) : (
                <div className="hover:scale-95 transition ease-in-out delay-75">
                  <ResturantCard resData={resturantElement.info} />
                </div>
              )}
              {/* <ResturantCard
                
                resData={resturantElement.info}

                  data={listOfRestuarant}
              /> */}
            </Link>
          );
        })}
        {/* <ResturantCard resData={resObj?.[0]} />
          <ResturantCard resData={resObj?.[1]} />
          <ResturantCard resData={resObj?.[2]} />
          <ResturantCard resData={resObj?.[3]} />
          <ResturantCard resData={resObj?.[4]} />
          <ResturantCard resData={resObj?.[5]} />
          <ResturantCard resData={resObj?.[6]} />
          <ResturantCard resData={resObj?.[7]} />
          <ResturantCard resData={resObj?.[8]} />
          <ResturantCard resData={resObj?.[9]} /> */}
      </div>
    </div>
  );
};

export default Body;
