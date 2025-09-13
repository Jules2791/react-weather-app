import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city">{props.data.city}</h1>
          <strong>
            <FormattedDate date={props.data.date} />{" "}
          </strong>
          <p className="weather-app-details">
            <span className="text-capitalize">{props.data.description}</span>
            <br />
            Humidity: <strong id="humidity">{props.data.humidity}%</strong>,
            Wind:{" "}
            <strong id="wind-speed">{Math.round(props.data.wind)} km/h</strong>
          </p>
        </div>

        <div className="weather-app-temperature-container">
          <div className="weather-app-icon">
            <WeatherIcon
              code={props.data.icon}
              description={props.data.description}
              size={64}
            />
          </div>
          <div className="weather-app-temperature" id="weather-app-temperature">
            {Math.round(props.data.temperature)}
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
    </div>
  );
}
