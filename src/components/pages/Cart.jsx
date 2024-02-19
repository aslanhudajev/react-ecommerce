import { useEffect, useRef, useState } from "react";
import App from "../../App";

import CartItem from "../snippets/CartItem";

function Cart() {
  const [cart, setCart] = useState([]);
  const total = useRef(0);

  useEffect(() => {
    const newCart = App.GetCart();
    total.current = App.GetTotal();

    setCart(newCart);
  }, []);

  function removeFromCart(e) {
    App.RemoveFromCart(parseInt(e.target.dataset.id));
    total.current = App.GetTotal();
    const newCart = App.GetCart();

    setCart(newCart);
  }

  return (
    <div className="cart flex flex-col p-4">
      {cart.map((product) => {
        return (
          <CartItem
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            id={product.id}
            removeFromCart={removeFromCart}
            key={product.id}
          />
        );
      })}

      <div className="cart-footer flex flex-row items-center justify-end gap-2">
        <span className="shipping">Shipping cost: $5</span>
        <span className="total">Subtotal: ${total.current}</span>
      </div>
    </div>
  );
}

export default Cart;
