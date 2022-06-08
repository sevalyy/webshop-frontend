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
  FaEuroSign,
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

  console.log("What is params", params);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <Banner />
      <div className="details">
        <div>
          <img className="bigImg" src={product.mainImage} alt={product.title} />
        </div>
        <div>
          <p className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">
              5
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">
              4
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">
              3
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">
              2
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">
              1
            </label>
            <button>Add Review</button>
          </p>
          <h3>{product.title}</h3>
          <p>
            <FaEuroSign />
            {product.price}
          </p>
          <p>{product.description}</p>
          <button>
            <FaShoppingBag />
            Add To Cart
          </button>{" "}
          <button>
            <FaHeart /> Favorite
          </button>
          <p>Category: {product.category.title}</p>
          <p>
            {" "}
            Share <FaFacebook /> <FaInstagram /> <FaTwitter />{" "}
          </p>
        </div>
      </div>
      <Tabs product={product} />
    </div>
  );
};

export default DetailsPage;
