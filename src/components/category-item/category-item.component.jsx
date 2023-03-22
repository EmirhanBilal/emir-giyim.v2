import "./category-item.styles.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Link className="kategori-konteynırı" to={`/shop/${title}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        {/* <img src="" alt="" /> */}
        <div className="kategori-gövde-konteynırı">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
    </Link>
  );
};
export default CategoryItem;
