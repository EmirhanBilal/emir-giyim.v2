import ShopProductInfo from "../shop.product-info/shop.product-info.component";
import ShopProductType from "../shop.product-type/shop.product-type.component";
import "../shopping.styles.scss";

const Sneakers = ({ products, handleCount, addProducts }) => {
  const ceket = [];
  let sorgu = "Sneakers";
  products.forEach((product) => {
    if (product.type === sorgu) {
      ceket.push(<ShopProductType key={product.type} type={product.type} />);
      sorgu = null;
    }
    if (product.type === "Sneakers") {
      ceket.push(
        <ShopProductInfo
          key={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          handleCount={handleCount}
          addProducts={addProducts}
          id={product.id}
        />
      );
    }
  });
  return <div className="products-container">{ceket}</div>;
};
export default Sneakers;
