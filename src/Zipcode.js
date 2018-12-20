import React from 'react';
import PropTypes from 'prop-types';
import api from './utilities/api';

class Zipcode extends React.Component
{
  constructor(props) {
    super(props);
    this.orientation = props.orientation;
    this.state = {
      zipcode: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({zipcode: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.zipcode
    )
  }

  render() {
    return (
      <div className="zipcode-display"
        style={{'flexDirection': this.props.orientation}}>
        <form className="forms" onSubmit={this.handleSubmit}>
          <input
            name="zipcode"
            id="zipcode"
            className="inputcontrol"
            placeholder='01757'
            onChange={this.handleChange}>
          </input>
          <button
            id="goButton"
            value="Weather"
            type="submit"
            >
            Get Weather
          </button>
        </form>

      </div>)
  }

}

Zipcode.propTypes = {
  orientation: PropTypes.string.isRequired
}

Zipcode.defaultProps = {
  orientation: 'row'
}

export default Zipcode;
