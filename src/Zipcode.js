import React from 'react';
import PropTypes from 'prop-types';
import api from './utilities/api';

class Zipcode extends React.Component
{
  constructor(props) {
    super(props);
    this.orientation = props.orientation;
    this.state = {
      orientation: this.orientation
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="zipcodedisplay"
        style={{'flexDirection': this.orientation}}>
        <input
          name="zipcode"
          id="zipcode"
          className="inputcontrol"
          placeholder='Milford, MA'>
        </input>
        <button
          id="goButton"
          value="Weather"
          onClick={this.handleClick}
          >
          Get Weather
        </button>

      </div>)
  }

  handleClick() {
    this.swapBody();
    api.queryWeatherApiCurrentWeather('01757');
  }

  swapBody() {
    //alert("Clicked");
    var mainBody = document.getElementById('mainBody');
    //mainbody.style
    mainBody.innerHTML = "<p>Loading..</p>";
    mainBody.style.backgroundImage = "none";
    //console.log(mainBody);
  }
}

Zipcode.propTypes = {
  orientation: PropTypes.string.isRequired
}

Zipcode.defaultProps = {
  orientation: 'row'
}


export default Zipcode;
