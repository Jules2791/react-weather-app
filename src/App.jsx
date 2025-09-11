import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <a href="https://github.com/Jules2791" target="_blank">
            {" "}
            Julie May
          </a>
          , is open-sourced on
          <a
            href="https://github.com/Jules2791/react-weather-app"
            target="_blank"
          >
            {" "}
            GitHub
          </a>
          and hosted on
          <a
            href="https://incandescent-brioche-49f1ef.netlify.app/"
            target="_blank"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
