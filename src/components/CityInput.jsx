import React, { Component } from "react";

class CityInput extends Component {
  state = {
    cityInput: ""
  };
  render() {
    return (
      <div>
        <form type="submit" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="cityInput"
            onChange={this.handleChange}
            value={this.state.cityInput}
          />
          <button>Search!</button>
        </form>
      </div>
    );
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //console.log("call api func with query:", this.state.cityInput);
    this.props.getWeatherByCity(this.state.cityInput);
    this.setState({ cityInput: "" });
  };
  handleChange = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };
}

export default CityInput;
