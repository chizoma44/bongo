import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleresponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.date.main.temp));
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <p>Lisbon Paris Sydney San Francisco</p>
        <form>
          <input type="search" placeholder="Enter a city.." />
          <input type="submit" className="btn btn-primary" value="Search" />
          <input type="submit" className="btn btn-success" vaulue="Current" />
        </form>
        <br />
        <h4>New York</h4>
        <ul>
          <li className="dateLi">Monday 19:38</li>
          <li className="imageLi">Mostly Sunny</li>
        </ul>
        <div className="row">
          <div className="col-2">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Mostly Sunny"
            />
            <span className="temp">{temperature}</span>
            <span className="units">℃ | °F</span>
          </div>
          <div className="col-9">
            <ul>
              <li>Precipitation: 59%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 7km/h</li>
            </ul>
          </div>
        </div>
        <footer>
          <a href="https://github.com/chizoma44/bongo">OpenSource Code</a>
          {""} by Chizo Korie
        </footer>
      </div>
    );
  } else {
    const apiKey = "bc73f3a1b088bb524455cc62ao20tb24";
    let city = "New York";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}&units=metric`;
    axios.get(apiUrl).then(handleresponse);
    return "Loading...";
  }
}
