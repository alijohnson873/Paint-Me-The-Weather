import React, { Component } from "react";

class Weather extends Component {
  state = {};

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=inauthor:&maxResults=20&key:AIzaSyBzAhdlRZ9hd3aOVRKTUzZW9KX06ncoimM"
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <p>I am the weather</p>
      </div>
    );
  }
}

export default Weather;
