import React from 'react'
import SearchBar from './componets/searchBar';
import WeatherCard from './componets/WatherCard';
import { useState } from 'react';
import { useWeather } from './hooks/useWeatherhook';  
function App() {

  const [city, setCity] = useState('');
  const { data, isLoading,isError, error } = useWeather(city);


  return (
    <>
      <div>
        <SearchBar />
        <WeatherCard />
      </div>
    </>
  )
}

export default App
