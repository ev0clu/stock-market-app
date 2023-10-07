import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-between bg-custom_green px-10 py-4 text-lg font-bold text-white">
      <h1>
        <Link to="/">Stock Market App</Link>
      </h1>
      <div className="hover:text-stone-100 hover:underline">
        <Link to="/favourites">Favourites</Link>
      </div>
    </div>
  );
}

export default Header;
