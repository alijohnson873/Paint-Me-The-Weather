import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import InputForm from "../src/components/Form";
import Weather from "../src/components/Weather";

function App() {
  return (
    <div className="App">
      <h1>I am in App</h1>
      <InputForm />
      <Weather />
    </div>
  );
}

export default App;
