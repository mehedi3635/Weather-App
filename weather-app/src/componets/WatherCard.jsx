function WeatherCard(){
    return(
        <div className="weather-card d-flex justify-content-center align-items-center flex-column gap-2">
            <h3 className="fw-bold">Weather Information</h3>
            <p className="fw-bold">Waether Data</p>
            <p className="fw-bold">City</p>
            <p className="fw-bold">Weather Conditions </p>
        </div>
    )
}
export default WeatherCard;