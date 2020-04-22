import React, { Component } from "react";

export default class WeatherCard extends Component {
  state = {
    weatherData: ""
  };

  convertFahrenheitToCelsius = fahrenheit =>
    parseFloat(fahrenheit - 273.15).toFixed(2);

  componentDidMount() {
    const APIkey = "0f33f5c78acf44e7d38b5f6706f6f59d";
    let cityId = this.props.city;
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${APIkey}`;
    fetch(weatherURL)
      .then(response => response.json())
      .then(weatherData => {
        this.setState({ weatherData });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <section className="card-section">
        {!this.state.weatherData ? (
          <p>data are not available</p>
        ) : (
          <div className="card" style={{ width: "18rem" }}>
            <div classaName="card-body">
              <h5 className="card-title">{this.state.weatherData.name} </h5>
              <p className="card-text"></p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {" "}
                Today's in {this.state.weatherData.name}
              </li>
              <li className="list-group-item">
                {" "}
                Avarage Temperature of{" "}
                {this.convertFahrenheitToCelsius(
                  this.state.weatherData.main.temp
                )}{" "}
                °C
              </li>
              <li className="list-group-item">
                {" "}
                Humidity {this.state.weatherData.main.humidity} %
              </li>
              <li className="list-group-item"> TEMP:</li>
              <li className="list-group-item">
                {" "}
                Minimum temp :{" "}
                {this.convertFahrenheitToCelsius(
                  this.state.weatherData.main.temp_min
                )}{" "}
                °C{" "}
              </li>
              <li className="list-group-item">
                {" "}
                Max Temp :{" "}
                {this.convertFahrenheitToCelsius(
                  this.state.weatherData.main.temp_max
                )}{" "}
                °C
              </li>
            </ul>
          </div>
        )}
      </section>
    );
  }
}
