import { useState, useContext } from 'react';
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
    <>
      <div className="flex flex-row">
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
          <AiOutlineSearch className="h-7 w-7" />
        </button>
      </div>
      <div>
        {isLoading && <span>Loading</span>}
        <pre>{JSON.stringify(stockData, null, 2)}</pre>
      </div>
    </>
  );
}

export default SearchView;
