import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between sticky top-0 z-10 w-full gap-y-4 p-5 shadow">
      <Link to="/" className="text-3xl font-bold text-black cursor-pointer">
        Anlopezdev
      </Link>
      <ul className="flex gap-x-5">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </ul>
    </header>
  );
};

export default Header;
