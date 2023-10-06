import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function SearchList() {
  const { stockData, isLoading, stockError, handleDetails } =
    useContext(AppContext);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center">
          <div>Loading ...</div>
        </div>
      ) : (
        <div className="flex flex-col items-stretch">
          {stockError ? (
            <p className="mx-auto my-5 text-red-600">
              Stock has not found
            </p>
          ) : (
            stockData.bestMatches.map((stock, index) => (
              <div
                className="mx-10 flex flex-row items-center justify-between gap-4 border-b-2 py-2"
                key={index}
                data-symbol={stock['1. symbol']}
              >
                <div className="flex flex-row items-center gap-5">
                  <p className="font-bold">{stock['1. symbol']}</p>
                  <p className="break-word max-w-10rem whitespace-normal md:max-w-xl">
                    {stock['2. name']}
                  </p>
                </div>
                <button
                  className="h-7 w-7 rounded-full font-bold text-sky-700"
                  onClick={handleDetails}
                >
                  Details
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}

export default SearchList;
