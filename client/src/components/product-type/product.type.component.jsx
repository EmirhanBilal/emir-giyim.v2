import { Link } from "react-router-dom";

const ProductType = ({ type }) => {
  return (
    <div className="type-container">
     <Link to = {`${type.toLowerCase()}`}><h1>{type}</h1></Link>
    </div>
  );
};
export default ProductType;
