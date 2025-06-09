import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to simulate a search API request
  const searchAPI = (query) => {
    console.log(`Searching for: ${query}`);
    // In a real application, you would make an API request here
  };

  // Debounce function to delay the searchAPI call
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Debounced search function
  const debouncedSearch = debounce(searchAPI, 300);

  // useEffect to watch for changes in searchTerm and trigger debouncedSearch
  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  // Event handler for the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchComponent;
