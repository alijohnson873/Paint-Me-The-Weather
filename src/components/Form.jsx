import React, { Component } from "react";

class InputForm extends Component {
  state = {};
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Paint Me The Weather</button>
      </form>
    );
  }
}

export default InputForm;
