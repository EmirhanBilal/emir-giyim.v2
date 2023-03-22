import { Routes, Route, Link } from "react-router-dom";
import ProductSale from "../../components/product-sale/product.sale.component";

const Shop = ({ products, addProducts, handleCount }) => {
  return (
    <ProductSale
      products={products}
      addProducts={addProducts}
      handleCount={handleCount}
      key={1}
    />
  );
};

export default Shop;
