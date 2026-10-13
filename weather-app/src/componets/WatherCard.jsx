
function WeatherCard({ data }) {
  return (
    <section className="weather-card" aria-live="polite">
      <p className="weather-label">Current Weather</p>

      <h2 className="weather-city">{data.city}</h2>

      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
        alt={data.description}
      />

      <p className="weather-temperature">
        {Math.round(data.temperature)}°
      </p>

      <p className="weather-description">
        {data.description}
      </p>

      <p className="text-white-50 mt-3 mb-0">
        Temperature in Celsius
      </p>
    </section>
  );
}

export default WeatherCard;