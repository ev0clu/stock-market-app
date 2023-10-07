import SearchBar from '../components/SearchView/SearchBar';
import SearchList from '../components/SearchView/SearchList';

function SearchView() {
  return (
    <div className="mx-10 flex-1">
      <SearchBar />
      <SearchList />
    </div>
  );
}

export default SearchView;
