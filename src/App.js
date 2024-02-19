const App = (function () {
  let cart = [];

  function ProductLoader(id) {
    return fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => data);
  }

  async function AddToCart(e) {
    const productToAdd = await ProductLoader(e.target.dataset.id);
    const productToAddExists = cart.find(
      (product) => productToAdd.id === product.id,
    );

    if (productToAddExists) {
      productToAddExists.quantity += parseInt(e.target.dataset.quantity);
    } else {
      cart.push({
        imageSrc: productToAdd.image,
        name: productToAdd.title,
        price: parseInt(productToAdd.price),
        quantity: parseInt(e.target.dataset.quantity),
        id: productToAdd.id,
      });
    }
  }

  function RemoveFromCart(id) {
    cart = cart.filter((product) => product.id !== id);
  }

  function GetCart() {
    const cartCopy = structuredClone(cart);
    return cartCopy;
  }

  function GetTotal() {
    let accum = 0;
    for (const product of cart) {
      accum += product.price * product.quantity;
    }
    return accum;
  }

  return { AddToCart, RemoveFromCart, GetCart, GetTotal };
})();

export default App;
