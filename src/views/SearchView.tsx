import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchView() {
  const {
    handleSearch,
    handleInputChange,
    stockData,
    inputValue,
    isLoading
  } = useContext(AppContext);

  return (
    <div className="flex-1">
      <div className="my-10 flex flex-row items-center justify-center gap-3">
        <input
          className="rounded border-2 border-black px-2 py-1"
          type="text"
          placeholder="Search by symbol or name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="h-7 w-7 rounded-full"
          onClick={handleSearch}
        >
          <AiOutlineSearch className="h-7 w-7 " />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        {isLoading && <span>Loading</span>}
        {stockData.bestMatches.map((stock, index) => (
          <div
            className="flex flex-row items-center justify-center border-b-2 py-2"
            key={index}
          >
            <p className="w-32">{stock['1. symbol']}</p>
            <p className="break-word w-32 whitespace-normal">
              {stock['2. name']}
            </p>
            <Link className="font-bold text-sky-700" to="/details">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchView;
