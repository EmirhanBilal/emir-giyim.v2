import { useEffect } from "react";
import { countAtom } from "../../recoil/recoil-states";
import { useHandleCount } from "../../recoil/recoil.actions";



const ProductInfo = ({ img, name, price, addProducts, id,handleCount }) => {
  // const handleCount = useHandleCount(countAtom)
  const handleClick = () => {
    handleCount()
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
export default ProductInfo;
