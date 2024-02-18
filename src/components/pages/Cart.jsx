import { useEffect, useState } from "react";
import App from "../../App";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const newCart = App.GetCart();
    setCart(newCart);
  }, []);

  return (
    <>
      {cart.map((product) => {
        return <h1>{product.name}</h1>;
      })}
    </>
  );
}

export default Cart;
