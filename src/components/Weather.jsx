import React, { Component } from "react";
import InputForm from "../../src/components/Form";

class Weather extends Component {
  state = { weather: "", city: "", country: "" };

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=bristol,uk&appid=6df8b6decaded2790dd9bbf48af08d3a"
    )
      .then(res => res.json())
      .then(data =>
        this.setState(
          { weather: data.weather[0].main },
          console.log(data.weather[0].main)
        )
      );
  }

  render() {
    return (
      <div>
        <InputForm />
        <h3>The Weather in Bath is ...</h3>
      </div>
    );
  }
}

export default Weather;
