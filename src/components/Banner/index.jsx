import "./style.css";
import banner from "./banner.jpg";

const Banner = () => {
  return (
    <div className="row banner">
      <div className="two-thirds">
        Product for every need, at the distance of a click
      </div>
      <div className="bannerImage">
        <img src={banner} alt="bannerPhoto" />
      </div>
    </div>
  );
};

export default Banner;
