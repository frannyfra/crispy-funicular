import React, { Component } from "react";
import styles from "./WeatherCard.css";

export default class WeatherCard extends Component {
  state = {
    weatherData: "",
    error: null
  };

  convertKelvinToCelsius = kelvin => {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(2);
  };

  componentDidMount() {
    let cityID = this.props.city;
    let api = "0f33f5c78acf44e7d38b5f6706f6f59d";
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${api}`;
    fetch(weatherURL)
      .then(response => response.json())
      .then(weatherData => {
        this.setState({ weatherData });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    console.log(this.state.weatherData);
    return (
      <section className={styles.card}>
        {!this.state.weatherData ? (
          <p>Data are not availabe</p>
        ) : (
          <article>
            <h1>Weather for: {this.state.weatherData.name} </h1>
            <p>
              Current Temperature:{" "}
              {this.convertKelvinToCelsius(this.state.weatherData.main.temp)}°C
            </p>
            <p>Humidity: {this.state.weatherData.main.humidity}% </p>
            <p>
              Min Temperature:{" "}
              {this.convertKelvinToCelsius(
                this.state.weatherData.main.temp_min
              )}
              °C
            </p>
            <p>
              Max Temperature:{" "}
              {this.convertKelvinToCelsius(
                this.state.weatherData.main.temp_max
              )}
              °C
            </p>
          </article>
        )}
      </section>
    );
  }
}
