import React, { useState, useEffect, useLayoutEffect, use } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

useEffect(()=>{
  setLoaded(false);
}, [props.coordinates]);


  function handleResponse(response) {
    // console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(`Forecast Vaiable`);
    console.log(forecast);
  }
 

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "f3t8e4a1a6ba9e7f04b3064e10efo014";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
