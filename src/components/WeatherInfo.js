import React, { useState, useEffect } from "react";
import axios from "axios";
function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    if (props.capital) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=23f3748c4aaa30159a39f8015db8620b&query=${props.capital}`
        )
        .then((res) => {
          console.log(res.data.current);
          setWeatherData(res.data.current);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <p>Temperature: {weatherData?.temperature}</p>
      <p>Precipitation: {weatherData?.precip}</p>
      <p>Pressure: {weatherData?.pressure}</p>
    </div>
  );
}

export default WeatherInfo;
