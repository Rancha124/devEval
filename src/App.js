import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CountryData from "./components/CountryData";
import { Router } from "react-router-dom";
import Routes from "./router";
import history from "./history";

function App() {
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState([]);
  const handleSubmit = () => {
    if (country) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((res) => {
          console.log("resulkts", res);
          setCountryInfo(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {countryInfo && countryInfo.length > 0 && (
        <CountryData countryInfo={countryInfo} />
      )}

      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
