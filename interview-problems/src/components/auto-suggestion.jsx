import React, { useState, useEffect } from 'react';

const sampleData = [
  'apple', 'banana', 'grape', 'orange', 'pineapple', 'peach', 'mango', 'kiwi'
];

const SearchWithSuggestions = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // 300ms debounce
    return () => clearTimeout(timer);
  }, [query]);

  // Simulate fetch
  useEffect(() => {
    if (debouncedQuery.trim()) {
      const filtered = sampleData.filter(item =>
        item.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded"
        placeholder="Search fruit..."
      />
      {suggestions.length > 0 && (
        <ul className="border mt-2 rounded shadow text-left">
          {suggestions.map((item, idx) => (
            <li key={idx} className="p-2 hover:bg-gray-100 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchWithSuggestions;
