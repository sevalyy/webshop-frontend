import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Tabs from "../../components/Tabs";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaShoppingBag,
  FaHeart,
} from "react-icons/fa";

const DetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${params.id}`
        );
        setProduct(response.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    getDetails();
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="containerDetail">
      <Banner />
      <div className="detailsPage">
        <div className="detailsImage">
          <img className="bigImg" src={product.mainImage} alt={product.title} />
        </div>
        <div className="productInfo">
          <h3>{product.title}</h3>
          {/* *****RATING STARS******* */}
          <p className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label htmlFor="star5" title="text">
              5
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label htmlFor="star4" title="text">
              4
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label htmlFor="star3" title="text">
              3
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label htmlFor="star2" title="text">
              2
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label htmlFor="star1" title="text">
              1
            </label>
            {/* ******************** */}
          </p>
          <button
            className="buttonsStyle"
            onClick={() => console.log("Add Review clicked!")}
          >
            Add Review
          </button>
          <br />
          <p className="price">Price: €{product.price}</p>
          <p>{product.description}</p>
          <button
            className="buttonsStyle addToCart"
            onClick={() => console.log("Item on your basket")}
          >
            <FaShoppingBag />
            Add To Cart
          </button>{" "}
          <button
            className="buttonsStyle"
            onClick={() => console.log("Item is added to your favorite.")}
          >
            <FaHeart /> Favorite
          </button>
          <p>Category: {product.category.title}</p>
          <p>
            {" "}
            Share <FaFacebook className="facebookColor" />{" "}
            <FaInstagram className="instagramColor" />{" "}
            <FaTwitter className="twitterColor" />{" "}
          </p>
        </div>
      </div>
      <Tabs product={product} />
    </div>
  );
};

export default DetailsPage;
