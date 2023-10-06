import SearchBar from '../components/SearchView/SearchBar';
import SearchList from '../components/SearchView/SearchList';

function SearchView() {
  return (
    <div className="flex-1">
      <SearchBar />
      <SearchList />
    </div>
  );
}

export default SearchView;
