import { Productdata } from "../../utils/data";
import ShopCard from "./ShopCard";
import { useState } from "react";

const Body = () => {
  const [listData, setListData] = useState(Productdata);
  //   console.log("listdata", listData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            let filterList = Productdata.filter((ele) => {
              return ele.rating?.rate > 4;
            });
            console.log("filterlist", filterList);
            setListData(filterList);
          }}>
          Top Rated ProductItems
        </button>
      </div>
      {/* <ShopCard itemData={Productdata?.[0]} /> */}
      <div className="product-container">
        {listData.map((ele, index) => {
          return <ShopCard key={ele?.id} itemData={ele} nyName="Tanu" />;
        })}
      </div>
    </div>
  );
};

export default Body;
