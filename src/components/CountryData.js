import React, { useState } from "react";
import history from "../history";
import WeatherInfo from "./WeatherInfo";

function CountryData({ countryInfo }) {
  const [showWeather, setShowWeather] = useState(false);
  const AllCountryInfo =
    countryInfo &&
    countryInfo.map((item, index) => {
      return (
        <div>
          <h3>Country {index + 1} info :</h3>
          <p>Country capital: {item.capital}</p>
          <p>population: {item.population}</p>
          <p>
            Latitude: {item.latlng[0]} and longitude: {item.latlng[1]}{" "}
          </p>
          <img src={item.flag} alt="country flag" height="250" width="300" />
          <div>
            <button
              onClick={() => {
                setShowWeather(true);
              }}
            >
              Weather Information
            </button>
          </div>
          {showWeather && <WeatherInfo capital={item.capital} />}
        </div>
      );
    });
  return <div>{AllCountryInfo}</div>;
}

export default CountryData;
