import { Link } from 'react-router-dom';
import './style.css';
import {
  AiOutlineShoppingCart,
  AiOutlineZoomIn,
  AiOutlineHeart
} from 'react-icons/ai';

const ProductCard = ({
  id,
  productName,
  price,
  description,
  rating,
  image
}) => {
  const star = '⭐';

  return (
    <Link className="details-link" to={`/details/${id}`}>
      <div className="card-container">
        <div className="image-container">
          <img className="image-product" src={image} alt={productName} />
        </div>
        <div className="product-card">
          <p className="blue-color">{productName}</p>
          <div className="price-container">
            <p className="blue-color">
              {'\u20AC'} {price}
            </p>
            <p>
              {rating} {star.repeat(Math.round(rating))}
            </p>
          </div>
          <p className="gray-color description ">{description}</p>
          <div className="icons-container">
            <ul>
              <li>
                <span>
                  <AiOutlineShoppingCart />
                </span>
              </li>
              <li>
                <AiOutlineHeart />
              </li>
              <li>
                <AiOutlineZoomIn />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
