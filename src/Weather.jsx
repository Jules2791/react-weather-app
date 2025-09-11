import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    // SheCodes API shape
    setTemperature(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather-app">
        <header>
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              id="search-form-input"
              className="search-form-input"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </header>
        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city" id="weather-app-city">
                London
              </h1>
              <p className="weather-app-details">
                <span id="time">
                  <strong>Sat, 2 Aug 2025</strong>
                  <br />
                </span>
                <span id="description">Scattered clouds</span>
                <br />
                Humidity: <strong id="humidity">80%</strong>, Wind:
                <strong id="wind-speed">10 km/h</strong>
              </p>
            </div>

            <div className="weather-app-temperature-container">
              <img
                className="weather-app-icon"
                src=""
                alt="" /* you can hook your icon later */
              />
              <div id="icon"></div>
              <div
                className="weather-app-temperature"
                id="weather-app-temperature"
              >
                {Math.round(temperature)}
              </div>
              <div className="weather-app-unit">°C</div>
            </div>
          </div>

          <div className="weather-forecast" id="forecast"></div>
        </main>
      </div>
    );
  } else {
    const apiKey = "ba5f0o41c7ff3cc032eee04b3d66at0a";
    const city = "New York";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
