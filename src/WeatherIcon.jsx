import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const sheCodesToRAW = {
  "clear-sky-day": "CLEAR_DAY",
  "clear-sky-night": "CLEAR_NIGHT",
  "few-clouds-day": "PARTLY_CLOUDY_DAY",
  "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
  "scattered-clouds-day": "CLOUDY",
  "scattered-clouds-night": "CLOUDY",
  "broken-clouds-day": "CLOUDY",
  "broken-clouds-night": "CLOUDY",
  "overcast-clouds-day": "CLOUDY",
  "overcast-clouds-night": "CLOUDY",
  "shower-rain-day": "RAIN",
  "shower-rain-night": "RAIN",
  "rain-day": "RAIN",
  "rain-night": "RAIN",
  "light-rain-day": "RAIN",
  "light-rain-night": "RAIN",
  "moderate-rain-day": "RAIN",
  "moderate-rain-night": "RAIN",
  "heavy-rain-day": "RAIN",
  "heavy-rain-night": "RAIN",
  "thunderstorm-day": "RAIN",
  "thunderstorm-night": "RAIN",
  "snow-day": "SNOW",
  "snow-night": "SNOW",
  "mist-day": "FOG",
  "mist-night": "FOG",
  "fog-day": "FOG",
  "fog-night": "FOG",
};

export default function WeatherIcon({
  code,
  size = 52,
  color = "#1e1e1e",
  description,
}) {
  const iconName = sheCodesToRAW[code] || "CLOUDY";
  return (
    <ReactAnimatedWeather
      icon={iconName}
      color={color}
      size={size}
      animate
      title={description}
    />
  );
}
