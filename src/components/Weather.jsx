import React, { Component } from "react";
import styles from "./Weather.module.scss";

class Weather extends Component {
  state = {
    weatherMain: "",
    temp: "",
    city: "",
    cityInput: "",
    country: "",
    countryInput: "",
    error: ""
  };

  handleChangeCity = event => {
    this.setState({ cityInput: event.target.value });
  };
  handleChangeCountry = event => {
    this.setState({ countryInput: event.target.value });
  };
  submitLocation = event => {
    event.preventDefault();
    this.setState({
      city: this.state.cityInput,
      country: this.state.countryInput,
      cityInput: "",
      countryInput: ""
    });
    this.fetchApi();
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
            temp: data.main.temp
          },
          //   console.log(data.name),
          console.log(data.weather[0].main),
          console.log(data.main.temp)
        )
      )
      .catch(error => this.setState({ error: "error" }));
  };

  componentDidMount() {
    this.fetchApi();
  }

  convertTempUnit = k => {
    return Math.round(k - 273.15);
  };

  render() {
    //   const display
    return (
      <section className={styles.mainWrapper}>
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
        <article className={styles.mainText}>
          <h3>
            The Weather in {this.capitalise1stLetter(this.state.city)}, is...
          </h3>
          <h2>
            {this.convertTempUnit(this.state.temp)}&#8451; with{" "}
            {this.state.weatherMain}
          </h2>
        </article>
      </section>
    );
  }
}

export default Weather;
