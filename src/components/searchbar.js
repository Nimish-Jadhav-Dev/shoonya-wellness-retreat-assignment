import React,{ useState } from 'react'
import SearchBar from './searchComp';

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm) => {
      console.log('Searching for:', searchTerm);
      // Implement your search logic here
      // For example:
      // const results = performSearch(searchTerm);
      // setSearchResults(results);
    };
  return (
    <SearchBar
        onSearch={handleSearch}
        placeholder="Search retreats..."
      />
  )
}

export default Search;