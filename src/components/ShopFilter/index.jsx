import './style.css';
import { AiOutlineStar } from 'react-icons/ai';

const ShopFilter = ({ categories }) => {
  return (
    <div className="shop-filter-container">
      <div className="flexbox categories">
        <h2>Categories</h2>
        {/* <label>
          <input value={category} type="checkbox" />
          {category}
        </label> */}
        {categories.map(category => (
          <label>
            <input value={category} type="checkbox" />
            {''} {category}
          </label>
        ))}
      </div>
      <div className="flexbox rating">
        <h2>Rating Item</h2>
        <label>
          <input type="checkbox" />
          {''} <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{' '}
          <AiOutlineStar /> <AiOutlineStar />
        </label>
      </div>
      <div className="flexbox price">
        <h2>Price Filter</h2>
        <label>
          <input type="checkbox" />
          {''} {'\u20AC'}0.00 - {'\u20AC'}150.00
        </label>
        <label>
          <input type="checkbox" />
          {''} {'\u20AC'}150.00 - {'\u20AC'}350.00
        </label>
        <label>
          <input type="checkbox" />
          {''} {'\u20AC'}350.00 - {'\u20AC'}450.00
        </label>
        <label>
          <input type="checkbox" />
          {''} {'\u20AC'}450.00 +
        </label>
      </div>
    </div>
  );
};

export default ShopFilter;
