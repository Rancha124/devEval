import React from "react";
import { Route, Switch } from "react-router-dom";
import CountryData from "./components/CountryData";
import WeatherInfo from "./components/WeatherInfo";

function Routes() {
  return (
    <Switch>
      <Route exact component={WeatherInfo} path="/weather/:country" />
      <Route exact component={CountryData} path="/" />
    </Switch>
  );
}

export default Routes;
