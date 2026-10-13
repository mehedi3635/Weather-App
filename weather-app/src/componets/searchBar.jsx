
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const city = text.trim();

    if (!city) return;

    onSearch(city);
  }

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} className="weather-search">
        <input
          className="weather-input"
          type="text"
          placeholder="Enter a city, e.g. Dhaka"
          aria-label="City name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;