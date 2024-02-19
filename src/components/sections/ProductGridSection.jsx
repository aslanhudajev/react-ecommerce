import { useEffect, useState } from "react";
import ProductCard from "../snippets/ProductCard";

function ProductGridSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="product-grid grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        return (
          <ProductCard
            imageSrc={product.image}
            productName={product.title}
            price={"$" + product.price}
            id={product.id}
            key={product.id}
          />
        );
      })}
    </section>
  );
}

export default ProductGridSection;
