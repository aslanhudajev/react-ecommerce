import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import App from "../../App";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log(productId);
    fetch("https://fakestoreapi.com/products/" + productId)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section className="product-page grid grid-cols-2">
      <div className="pictures">
        <img src={product.image} alt="" className="product-img" />
      </div>
      <div className="product-info flex flex-col gap-4">
        <h2 className="product-name">{product.title}</h2>
        <span className="price">{product.price}</span>
        <div className="add-to-cart flex flex-row gap-2">
          <button
            data-id={productId}
            data-quantity={quantity}
            className="card-add-to-cart mt-2 rounded-md bg-gray-600 px-4 py-1 text-xs font-semibold text-white hover:border hover:border-black hover:bg-transparent hover:text-black"
            onClick={App.AddToCart}
          >
            Add to cart
          </button>
          <input
            className=" w-10"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <p className="desc">{product.description}</p>
      </div>
    </section>
  );
}

export default Product;
