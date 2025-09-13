import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city">{props.data.city}</h1>
          <p className="weather-app-details">
            <span id="time">
              <strong>
                <FormattedDate date={props.data.date} />{" "}
              </strong>
              <br />
            </span>
            <span className="text-capitalize" id="description">
              {props.data.description}
            </span>
            <br />
            Humidity: <strong id="humidity">{props.data.humidity}%</strong>,
            Wind:{" "}
            <strong id="wind-speed">{Math.round(props.data.wind)} km/h</strong>
          </p>
        </div>

        <div className="weather-app-temperature-container">
          <img
            className="weather-app-icon"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
          <div id="icon"></div>
          <div className="weather-app-temperature" id="weather-app-temperature">
            {Math.round(props.data.temperature)}
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
    </div>
  );
}
