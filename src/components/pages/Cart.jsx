import { useEffect, useState } from "react";
import App from "../../App";

import CartItem from "../snippets/CartItem";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const newCart = App.GetCart();
    setCart(newCart);
  }, []);

  function removeFromCart(e) {
    App.RemoveFromCart(parseInt(e.target.dataset.id));
    const newCart = App.GetCart();
    setCart(newCart);
  }

  return (
    <>
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
    </>
  );
}

export default Cart;
