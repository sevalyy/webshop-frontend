import "./style.css";
import { useState } from "react";

const Tabs = (props) => {
  const product = props.product;
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab ${checkActive(0, "active")}`}
          onClick={() => handleClick(0)}
        >
          Description
        </button>
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          Additional Info{" "}
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Review
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(0, "active")}`}>
          <h5>About the Product</h5>
          <p> {product.description}</p>
          <h5>More Details</h5>
          <p>
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus.
          </p>
        </div>
        <div className={`panel ${checkActive(1, "active")}`}>
          <h5>About the Product</h5>
          <p>
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
          </p>
          <h5>More Details</h5>
          <p>
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus.
          </p>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <p>
            {" "}
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
            tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
            Nullam quis ante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
