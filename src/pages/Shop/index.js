import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import ShopFilter from '../../components/ShopFilter';
import './style.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        // console.log("It's working", response);
        setProducts(response.data);

        const getCategories = () => {
          const categoryList = [];
          response.data.map(product => {
            if (!categoryList.includes(product.category.title)) {
              categoryList.push(product.category.title);
            }
            console.log(categoryList);
            return categoryList;
          });
          setCategories(categoryList);
        };

        getCategories();
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);

  // console.log('what is products?', products);

  return (
    <div className="shop-container">
      <div className="filter-container">
        {/* {categories.map(category => {
          return <ShopFilter category={category} />;
        })} */}
        <ShopFilter categories={categories} />
      </div>
      <div className="product-container">
        {products ? (
          products.map(product => {
            const { id, title, price, description, rating, mainImage } =
              product;
            return (
              <ProductCard
                key={id}
                id={id}
                image={mainImage}
                productName={title}
                price={price}
                rating={rating}
                description={description}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
