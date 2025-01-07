import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {

 const codeMapping = {
   "clear-sky-day": "CLEAR_DAY",
   "clear-sky-night": "CLEAR_NIGHT",
   "few-clouds-day": "PARTLY_CLOUDY_DAY",
   "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
   "scattered-clouds-day": "CLOUDY",
   "scattered-clouds-night": "CLOUDY",
   "broken-clouds-day": "CLOUDY",
   "broken-clouds-night": "CLOUDY",
   "shower-rain-day": "RAIN",
   "shower-rain-night": "RAIN",
   "rain-day": "RAIN",
   "rain-night": "RAIN",
   "thunderstorm-day": "THUNDERSTORM",
   "thunderstorm-night": "THUNDERSTORM",
   "snow-day": "SNOW",
   "snow-night": "SNOW",
   "mist-day": "FOG",
   "mist-night": "FOG",
 };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]} // Corrected to use '=' instead of ':'
      color="#8b9ab0"
      size={52} // Corrected to use '=' instead of ':'
      animate={true} // Corrected to use '=' instead of ':'
    />
  );
}
