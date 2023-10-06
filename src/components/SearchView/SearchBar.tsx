import { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import AppContext from '../../context/AppContext';

function SearchBar() {
  const { handleSearch, handleInputChange, inputValue } =
    useContext(AppContext);

  return (
    <div className="my-10 flex flex-row items-center justify-center gap-3">
      <input
        className="rounded border-2 border-black px-2 py-1"
        type="text"
        placeholder="Search by symbol or name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="h-7 w-7 rounded-full" onClick={handleSearch}>
        <AiOutlineSearch className="h-7 w-7 " />
      </button>
    </div>
  );
}

export default SearchBar;
