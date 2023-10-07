import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import NewSearchButton from '../NewSearchButton';
import { IoIosRemoveCircle } from 'react-icons/io';

function Favourites() {
  const { handleDetails, handleFavouriteRemove, favourite } =
    useContext(AppContext);

  const renderData = favourite.map((symbol, index) => (
    <div
      className="flex flex-row items-center justify-between gap-4 border-b-2 py-2"
      key={index}
    >
      <button
        data-symbol={symbol}
        className="h-7 w-7 rounded-full font-bold text-sky-700"
        onClick={handleDetails}
      >
        <p className="font-bold">{symbol}</p>
      </button>
      <button data-symbol={symbol} onClick={handleFavouriteRemove}>
        <IoIosRemoveCircle className="text-xl text-red-600 hover:cursor-pointer" />
      </button>
    </div>
  ));

  return (
    <div className="flex flex-col">
      {favourite.length === 0 && (
        <div className="mb-2 mt-5 flex flex-col justify-center">
          <p className="text-center">Favourites still empty</p>
          <NewSearchButton />
        </div>
      )}
      {renderData}
    </div>
  );
}

export default Favourites;
