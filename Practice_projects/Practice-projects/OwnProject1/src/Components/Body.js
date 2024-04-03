import UserCards from "./UserCards";
import Userdata from "../../utils/data";
const Body = () => {
  return (
    <div className="body">
      <div className="serach">Search</div>
      {/* <UserCards ItemData={Userdata?.[0]} /> */}
      <div className="userdata-container">
        {Userdata.map((Item, index) => {
          return <UserCards key={Item?.id} ItemData={Item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
