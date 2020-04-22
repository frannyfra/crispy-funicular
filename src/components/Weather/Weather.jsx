import React, { Component } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

export default class Weather extends Component {
  state = {
    cities: {
      london: "2643744",
      bristol: "4749005",
      rome: "4219762"
    }
  };
  render() {
    const city_id = Object.values(this.state.cities);
    return (
      <>
        {city_id.map((value, index) => {
          return (
            <WeatherCard key={index} city={value}>
              {value}
            </WeatherCard>
          );
        })}
      </>
    );
  }
}
