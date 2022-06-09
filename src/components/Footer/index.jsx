import { Link } from "react-router-dom";
import "./style.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        {" "}
        <h3>
          The<span className="footerLogo">Shop</span>
        </h3>
      </div>
      <div className="categories">
        <h4>CATEGORIES</h4>
        <div className="categoryLink visit">
          <p>
            <Link to={"/shop"}>Electronics</Link>
          </p>
          <p>
            <Link to={"/shop"}>Jewelery</Link>
          </p>
          <p>
            <Link to={"/shop"}>Men's Clothing</Link>
          </p>
          <p>
            <Link to={"/shop"}>Women's Clothing</Link>
          </p>
        </div>
      </div>
      <div className="account">
        <h4>ACCOUNT</h4>
        <p>My Account</p>
        <p>Returns</p>
        <p>Order History</p>
        <p>Order Tracking</p>
      </div>
      <div className="follow">
        <h4>FOLLOW</h4>
        <p>
          <FaFacebook /> <FaInstagram /> <FaTwitter />
        </p>
      </div>
    </div>
  );
};

export default Footer;
