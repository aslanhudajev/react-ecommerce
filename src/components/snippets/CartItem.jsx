import PropTypes from "prop-types";

function CartItem({ imageSrc, name, price, quantity, id, removeFromCart }) {
  return (
    <div
      className="cart-item flex flex-row items-center justify-between p-4"
      data-id={id}
    >
      <div className="flex grow flex-row items-center gap-4">
        <img
          src={imageSrc}
          alt={name}
          className="cart-item-img h-32 self-center rounded-md rounded-b-none"
        />
        <span className="cart-item-name">{name}</span>
      </div>
      <div className="flex flex-row items-center gap-4">
        <span>Quantity: {quantity}</span>
        <span className="cart-item-price">{"$" + price + "USD"}</span>
        <button data-id={id} onClick={removeFromCart}>
          x
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  removeFromCart: PropTypes.func,
};

export default CartItem;
