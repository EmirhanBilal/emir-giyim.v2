const ShopProductInfo = ({
  img,
  name,
  price,
  handleCount,
  addProducts,
  id,
}) => {
  const handleClick = () => {
    handleCount();
    addProducts(img, name, price, id);
  };
  return (
    <div className="info-container">
      <img src={img} alt={name} />
      <div className="info">
        <p>{name}</p>
        <p>{price}$</p>
      </div>
      <div className="button-container">
        <button className="cart-btn" onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ShopProductInfo;
