import React, { useState } from 'react';
import HomeBar from './HomeBar'; // Import HomeBar component

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // For now, just log the query to the console
    console.log("Searching for:", query);
  };

  return (
    <div>
      <HomeBar />  {/* Render the Homebar here */}
      <h1>Search</h1>
      <input 
        type="text" 
        value={query} 
        onChange={handleSearchChange} 
        placeholder="Search for a movie..." 
      />
      <button onClick={handleSearchSubmit}>Search</button>

      {/* Display search results (for now, just a dummy message) */}
      {query && <p>Results for: {query}</p>}
    </div>
  );
};

export default SearchPage;
