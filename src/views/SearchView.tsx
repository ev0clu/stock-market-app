import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchView/SearchBar';
import SearchList from '../components/SearchView/SearchList';

function SearchView() {
  const { resetContext } = useContext(AppContext);

  useEffect(() => {
    resetContext();
  }, []);

  return (
    <div className="mx-10 flex-1">
      <SearchBar />
      <SearchList />
    </div>
  );
}

export default SearchView;
