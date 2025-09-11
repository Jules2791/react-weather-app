import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
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
                {weatherData.city}
              </h1>
              <p className="weather-app-details">
                <span id="time">
                  <strong>
                    <FormattedDate date={weatherData.date} />{" "}
                  </strong>
                  <br />
                </span>
                <span className="text-capitalize" id="description">
                  {weatherData.description}
                </span>
                <br />
                Humidity: <strong id="humidity">{weatherData.humidity}%</strong>
                , Wind:{" "}
                <strong id="wind-speed">
                  {Math.round(weatherData.wind)} km/h
                </strong>
              </p>
            </div>

            <div className="weather-app-temperature-container">
              <img
                className="weather-app-icon"
                src={weatherData.iconUrl}
                alt={weatherData.description}
              />
              <div id="icon"></div>
              <div
                className="weather-app-temperature"
                id="weather-app-temperature"
              >
                {Math.round(weatherData.temperature)}
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
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
