import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    // console.log(response.data);
    setWeatherData({
      coordinates: response.data.coordinates,
      name: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.humidity,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.deg,
      city: response.data.name,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      icon: response.data.condition.icon
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search(city);
  }

  function search() {
    const apiKey = "f3t8e4a1a6ba9e7f04b3064e10efo014";

    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn  btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
