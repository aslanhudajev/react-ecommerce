import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header sticky top-0 flex flex-row items-center justify-between bg-white p-5 drop-shadow-sm">
      <div className="logo">
        <Link to="/">
          <h1 className="logo">Shop</h1>
        </Link>
      </div>
      <div className="header-links">
        <ul className="flex flex-row gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
}

export default Header;
