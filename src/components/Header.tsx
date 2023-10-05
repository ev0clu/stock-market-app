import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <h1 className="bg-custom_green px-3 py-4 font-bold text-lg text-white">
        <Link to="/">Stock Market App</Link>
      </h1>
    </>
  );
}

export default Header;
