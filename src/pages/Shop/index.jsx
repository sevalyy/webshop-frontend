import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import {
  CategoryFilter,
  RatingFilter,
  PriceFilter,
} from "../../components/ShopFilter";
import "./style.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProducts(response.data);

        const getCategories = () => {
          const categoryList = [];
          response.data.map((product) => {
            if (!categoryList.includes(product.category.title)) {
              categoryList.push(product.category.title);
            }
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

  const [filterCategories, setFilterCategories] = useState([]); // The value from the Categories filter;

  const filteredProducts =
    filterCategories.length === 0
      ? products
      : products.filter((item) =>
          filterCategories.includes(item.category.title)
        );

  const handleChangeFilter = (event) => {
    if (!filterCategories.includes(event.target.value)) {
      setFilterCategories([...filterCategories, event.target.value]);
    } else {
      const newCategories = filterCategories.filter(
        (category) => category !== event.target.value
      );
      setFilterCategories(newCategories);
    }
  };

  return (
    <div className="shop-container">
      <div className="filter-container">
        <h2>Categories</h2>
        {categories.map((category, index) => {
          return (
            <CategoryFilter
              key={index}
              categoryName={category}
              handleChange={handleChangeFilter}
            />
          );
        })}
        {/* <CategoryFilter categories={categories} /> */}
        <RatingFilter />
        <PriceFilter />
      </div>
      <div className="product-container">
        {products ? (
          filteredProducts.map((product) => {
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
