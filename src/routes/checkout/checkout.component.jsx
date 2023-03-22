import { Fragment, useEffect, useState } from "react";
import "./checkout.styles.scss";

const Checkout = ({
  cartProducts,
  handleDecrease,
  handleIncrease,
  handleRemove,
}) => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
  return (
    <div className="container">
      <div className="checkout-titles">
        <span>PRODUCT</span>
        <span>DESCRIPTION</span>
        <span>QUANTITY</span>
        <span>PRICE</span>
        <span>REMOVE</span>
      </div>
      <hr />

      {cartProducts.map((cartProduct) => {
        return (
          <Fragment key={cartProduct.name}>
            <div className="cart">
              <img src={cartProduct.img} />
              {size <= 600 ? (
                <div className="desc-container">
                  <div className="product-name">
                    <p>{cartProduct.name}</p>
                  </div>
                  <p className="product-quantity">
                    <span onClick={() => handleDecrease(cartProduct.id)}>
                      &#60;
                    </span>
                    {cartProduct.quantity}
                    <span onClick={() => handleIncrease(cartProduct.id)}>
                      &#62;
                    </span>
                  </p>
                  <div className="product-price">
                    <p>{cartProduct.price * cartProduct.quantity}$</p>
                  </div>
                  <p
                    className="product-remove"
                    onClick={() => handleRemove(cartProduct.id)}
                    style={{ cursor: "pointer" }}
                  >
                    X
                  </p>
                </div>
              ) : (
                <>
                  <div className="product-name">
                    <p>{cartProduct.name}</p>
                  </div>
                  <p className="product-quantity">
                    <span onClick={() => handleDecrease(cartProduct.id)}>
                      &#60;
                    </span>
                    {cartProduct.quantity}
                    <span onClick={() => handleIncrease(cartProduct.id)}>
                      &#62;
                    </span>
                  </p>
                  <div className="product-price">
                    <p>{cartProduct.price * cartProduct.quantity}$</p>
                  </div>
                  <p
                    className="product-remove"
                    onClick={() => handleRemove(cartProduct.id)}
                    style={{ cursor: "pointer" }}
                  >
                    X
                  </p>
                </>
              )}
            </div>
            <hr />
          </Fragment>
        );
      })}
      <p style={{ fontSize: "20px", textAlign: "end" }}>
        TOTAL:
        <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
          {cartProducts.reduce((totalPrice, cartProduct) => {
            totalPrice += cartProduct.quantity * cartProduct.price;
            return totalPrice;
          }, 0)}
          $
        </span>
      </p>
    </div>
  );
};
export default Checkout;
