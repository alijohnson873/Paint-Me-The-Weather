const displayErrorMessage =
  this.state.weatherMain === "Error"
    ? "AAAAAAGGGGGH Data not found"
    : `  <h3>
    The Weather in ${this.capitalise1stLetter(this.state.city)} is
    ${this.convertTempUnit(this.state.temp)} &#8451; with
    ${this.state.weatherDescription}
  </h3>`;
