import React, { Component } from 'react';
import propTypes from 'prop-types';
import './ContactForm.scss';

export default class ContactForm extends Component {
  static propTypes = {
    addContact: propTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            className="formInput"
            type="text"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number:
          <input
            required
            name="number"
            className="formInput"
            type="number"
            onChange={this.handleInputChange}
          />
        </label>
        <input className="submitBtn" type="submit" value="Add contact" />
      </form>
    );
  }
}
