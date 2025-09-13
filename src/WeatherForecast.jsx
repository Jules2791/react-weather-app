import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-date">Thurs</div>
          <WeatherIcon />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temp-max">
              <strong>19°</strong>
            </span>{" "}
            <span className="weather-forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
