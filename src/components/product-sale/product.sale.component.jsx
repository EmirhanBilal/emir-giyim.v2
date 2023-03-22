import ProductInfo from "../product-info/product.info.component";
import ProductType from "../product-type/product.type.component";
import "./product-sale.styles.scss"

const ProductSale = (props) => {
    const torba = []
    let durum = null;
    props.products.map((product) => {
    if (product.type !== durum) {
     torba.push(<ProductType  type = {product.type} key={product.name}/>);
    }

    torba.push(<ProductInfo  name = {product.name} price = {product.price} img = {product.img} addProducts={props.addProducts} handleCount={props.handleCount} id={product.id} key={product.id}/>);
    durum = product.type;
    return durum
  })
  return (
    <div className="shop-container">{torba}</div>
  )
}
export default ProductSale