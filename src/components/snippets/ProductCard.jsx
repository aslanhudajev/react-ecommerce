import { useEffect } from "react";

function ProductCard({ imageSrc, productName, vendor, price }) {
  useEffect(() => {});

  return (
    <div className="product-card flex w-fit flex-col items-center gap-2 space-x-4 rounded-xl border border-gray-500 p-5">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        className="product-card-img w-48 "
        alt="product-imagee"
      ></img>
      <span className="product-card-name text-lg">Intel i9 - 16 core CPU</span>
      <span className="product-card-price">$899</span>
      <button className="card-add-to-cart rounded-full border border-purple-300 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white">
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
