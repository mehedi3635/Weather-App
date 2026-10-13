
import { useState } from 'react';
import SearchBar from './componets/searchBar';
import WeatherCard from './componets/WatherCard';
import { useWeather } from './hooks/useWeatherhook';

function App() {
  const [city, setCity] = useState('');

  const { data, isLoading, isError, error } = useWeather(city);

  return (
    <main className="app-container">
      <header>
        <h1 className="app-heading">Weatherly ☁️</h1>
        <p className="app-subtitle">
          Discover the weather, wherever you are.
        </p>
      </header>

      <SearchBar onSearch={setCity} />

      {isLoading && (
        <p className="status-message">Getting weather data...</p>
      )}

      {isError && (
        <p className="status-message error-message" role="alert">
          {error?.message || 'Unable to load weather data.'}
        </p>
      )}

      {data && !isLoading && !isError && (
        <WeatherCard data={data} />
      )}

      <footer className="app-footer">
        Weather information powered by OpenWeatherMap
      </footer>
    </main>
  );
}

export default App;