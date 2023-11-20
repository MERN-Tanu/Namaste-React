const ShopCard = (props) => {
  console.log("prop", props);
  const { itemData } = props;
  console.log("title", itemData);
  const { title, price, description, image, category, rating } = itemData;
  return (
    <div className="cardItem">
      <img className="Product-logo" src={image} />
      <h4>{title}</h4>
      <p>Rating:{rating?.rate}⭐</p>
      <p>RatingCount:{rating?.count}</p>
      {/* <p>{category}</p> */}
      <p>{price}</p>
      <div className="Button">
        <button className="cart">Add to Cart</button>

        <button className="buy">Buy Now</button>
      </div>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default ShopCard;
