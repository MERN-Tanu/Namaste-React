import { IMG_LOGO } from "../../utils/constant";

const UserCards = (props) => {
  const { ItemData } = props;
  console.log("hello", ItemData);
  const { userId, id, title } = ItemData;

  return (
    <div className="usercards">
      <img className="Productimg" src={IMG_LOGO}></img>

      <h3>{id}</h3>
      {/* <h4>{title}</h4> */}
      <span>{userId}</span>
    </div>
  );
};

export default UserCards;
