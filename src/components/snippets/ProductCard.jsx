import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import App from "../../App";

function ProductCard({ imageSrc, productName, price, id }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card flex w-auto flex-col rounded-md border border-gray-300">
      <img
        src={imageSrc}
        className="product-card-img h-32 self-center rounded-md rounded-b-none"
        alt={productName}
      ></img>
      <div className="card-info flex grow flex-col items-start justify-between gap-1 p-2">
        <Link to={"/product/" + id}>
          <div className="box-border max-w-60 truncate">
            <span className="product-card-name text-xs hover:underline">
              {productName}
            </span>
          </div>
        </Link>
        <span className="product-card-price">{price + " USD"}</span>
        <div className="flex flex-row items-center justify-start gap-2">
          <button
            data-id={id}
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
      </div>
    </div>
  );
}

ProductCard.protoTypes = {
  imageSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
