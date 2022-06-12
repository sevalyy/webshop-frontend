import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard";
import { CategoryFilter } from "../../components/ShopFilter";

const CategoryPage = () => {
  const titles = [
    "",
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ];
  const params = useParams();
  const categoryId = parseInt(params.categoryId);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products/");
        setProducts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>{titles[categoryId]}</h1>

      <div className="shop-container">
        <div className="product-container">
          {products
            .filter((product) => product.categoryId === categoryId)
            .map((product) => {
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
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
