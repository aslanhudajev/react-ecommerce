const App = function() {
    let cart = [];

    function ProductLoader(id) {
        return fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => data);
    }

    async function AddToCart(e, quantity) {
        const productToAdd = await ProductLoader(e.target.dataset.id);

        if(cart.find((product) => productToAdd.id === product.id)) {

        } else {  
        cart.push({
            imageSrc: productToAdd.image,
            name: productToAdd.title,
            price: productToAdd.price,
            id: productToAdd.id,
            quantity: quantity,
        })
        }

        console.log(cart);
    }

    function RemoveFromCart(id) {
        cart = cart.filter((product) => product.id !== id)
    }

    function GetCart() {
        const cartCopy = structuredClone(cart);
        return cartCopy;
    }

    return { AddToCart, RemoveFromCart, GetCart };
}();

export default App;