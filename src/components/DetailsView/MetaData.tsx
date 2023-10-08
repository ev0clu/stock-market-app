import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { AiFillStar } from 'react-icons/ai';

function MetaData() {
  const {
    stockCompanyData,
    handleFavouriteAdd,
    handleFavouriteRemove,
    favourite
  } = useContext(AppContext);

  const renderedData = Object.entries(
    stockCompanyData['Meta Data']
  ).map(
    ([key, value], index) =>
      index > 1 && (
        <div
          className="flex flex-row justify-between gap-2 border-b-2"
          key={index}
        >
          <p>{key.slice(3, key.length)}</p>
          <p>{value}</p>
        </div>
      )
  );

  return (
    <div className="gap flex flex-col">
      <h1 className="mb-2 mt-5 flex flex-row gap-3 text-xl font-bold">
        {stockCompanyData['Meta Data']['1. Information']} (
        {stockCompanyData['Meta Data']['2. Symbol']})
      </h1>

      {favourite.includes(
        `${stockCompanyData['Meta Data']['2. Symbol']}`
      ) ? (
        <button
          data-symbol={stockCompanyData['Meta Data']['2. Symbol']}
          className="my-1 flex flex-row items-center gap-2 rounded border-2 border-black px-2"
          onClick={handleFavouriteRemove}
        >
          <AiFillStar className="text-yellow-400" />
          <div>Remove</div>
        </button>
      ) : (
        <button
          data-symbol={stockCompanyData['Meta Data']['2. Symbol']}
          className="my-1 flex flex-row items-center gap-2 rounded border-2 border-black px-2"
          onClick={handleFavouriteAdd}
        >
          <AiFillStar />
          <div>Add</div>
        </button>
      )}

      <div className="flex flex-col">{renderedData}</div>
    </div>
  );
}

export default MetaData;
