import React from "react";

export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
