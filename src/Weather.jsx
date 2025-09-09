import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <main>
      <div className="weather-app-data">
        <div>
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
        </div>
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
          <div id="icon"></div>
          <div className="weather-app-temperature" id="weather-app-temperature">
            20
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </main>
  );
}
