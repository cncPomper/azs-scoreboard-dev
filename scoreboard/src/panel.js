import React, { Component, useEffect, useState, useRef  } from 'react';
import ReactDOM from 'react-dom/client';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Podano następujące imię: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Imię:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Wyślij" />
      </form>
    );
  }
}

export default Panel;