import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

function SearchList() {
  const { stockData, isLoading, stockError } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col items-center">
        {isLoading && <div>Loading ...</div>}
      </div>
      <div className="flex flex-col items-stretch">
        {stockError ? (
          <p>Stock has not found</p>
        ) : (
          stockData.bestMatches.map((stock, index) => (
            <div
              className="mx-10 flex flex-row items-center justify-between gap-4 border-b-2 py-2"
              key={index}
            >
              <div className="flex flex-row items-center gap-5">
                <p className="font-bold">{stock['1. symbol']}</p>
                <p className="break-word max-w-10rem whitespace-normal md:max-w-xl">
                  {stock['2. name']}
                </p>
              </div>
              <Link className="font-bold text-sky-700" to="/details">
                Details
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default SearchList;
