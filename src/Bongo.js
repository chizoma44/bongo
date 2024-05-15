import React, { useState } from "react";
import axios from "axios";
import "./Bongo.css";

export default function Bongo() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  //Have access to the city inputed
  //Make an API call
  //Display outcome by updating UI

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="search-form-input"
        type="search"
        placeholder="Type a City..."
        onChange={updateCity}
      />
      <button className="btn btn-primary" type="submit" value="">
        Search
      </button>
      <button className="btn btn-success" type="submit" value="">
        Current
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li> Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>

          <img src={weather.icon} alt={weather.description} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
