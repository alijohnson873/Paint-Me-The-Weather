import React, { Component } from "react";
import styles from "./Weather.module.scss";

import scream from "../images/scream.jpg";
// import turnerClearSky from "../images/turnerclearsky.jpg";
import goyenCloud from "../images/goyencloud.jpg";
import turnerStorm from "../images/tunerstorm.jpg";
import summer from "../images/sueratsummer.png";
import snow from "../images/janjacobSnow.jpg";
// import tempest from "../images/tempest.jpg";
// import goghSun from "../images/vgoghsun.jpg";
import rain from "../images/magritte.jpeg";
import goghCloud from "../images/vgogh.jpg";

class Weather extends Component {
  state = {
    weatherMain: "",
    weatherDescription: "",
    temp: "",
    city: "",
    cityInput: "",
    country: "",
    countryInput: ""
  };

  handleChangeCity = event => {
    this.setState({ cityInput: event.target.value });
  };
  handleChangeCountry = event => {
    this.setState({ countryInput: event.target.value });
  };
  submitLocation = event => {
    event.preventDefault();
    this.setState(
      {
        city: this.state.cityInput,
        country: this.state.countryInput,
        cityInput: "",
        countryInput: ""
      },
      () => {
        this.fetchApi();
      }
    );
  };

  capitalise1stLetter = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

  fetchApi = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${
        this.state.country
      }&appid=6df8b6decaded2790dd9bbf48af08d3a`
    )
      .then(res => res.json())
      .then(data =>
        this.setState(
          {
            weatherMain: data.weather[0].main,
            temp: data.main.temp,
            weatherDescription: data.weather[0].description
          },
          console.log(data),
          console.log(data.weather[0].main),
          console.log(data.main.temp)
        )
      )
      .catch(error => this.setState({ weatherMain: "Error" }));
  };

  convertTempUnit = k => {
    return Math.round(k - 273.15);
  };

  conditionalPaintingBackground = () => {
    let image;
    if (this.state.weatherMain === "Clear") {
      image = summer;
    } else if (this.state.weatherMain === "Clouds") {
      image = goghCloud;
    } else if (this.state.weatherMain === "Thunderstorm") {
      image = turnerStorm;
    } else if (this.state.weatherMain === "Rain") {
      image = rain;
    } else if (this.state.weatherMain === "Snow") {
      image = snow;
    } else if (this.state.weatherMain === "Drizzle") {
      image = rain;
    } else if (this.state.weatherMain === "Error") {
      image = scream;
    } else {
      image = goyenCloud;
    }
    return `url(${image})`;
  };

  render() {
    // console.log(this.conditionalPaintingBackground());
    const displayWeather = this.state.city ? styles.mainText : styles.noText;

    return (
      <section
        style={{ backgroundImage: this.conditionalPaintingBackground() }}
      >
        <h1>Paint Me The Weather in...</h1>
        <form>
          <input
            type="text"
            name="city"
            placeholder="City..."
            onChange={this.handleChangeCity}
            value={this.state.cityInput}
          />
          <input
            type="text"
            name="country"
            placeholder="Country..."
            onChange={this.handleChangeCountry}
            value={this.state.countryInput}
          />
          <button onClick={this.submitLocation}>Paint</button>
        </form>
        <article className={displayWeather}>
          <h3>
            The Weather in {this.capitalise1stLetter(this.state.city)} is{" "}
            {this.convertTempUnit(this.state.temp)}&#8451; with{" "}
            {this.state.weatherDescription}
          </h3>
          <h2 />
        </article>
      </section>
    );
  }
}

export default Weather;
