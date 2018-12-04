import React, { Component } from "react";

class CityInput extends Component {
  state = {
    cityInput: ""
  };
  render() {
    return (
      <div>
        <form type="submit" onClick={this.handleSubmit}>
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
    console.log("send to api");
    this.setState({ cityInput: "" });
  };
  handleChange = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value }, () => {
      console.log(this.state.cityInput);
    });
  };
}

export default CityInput;
