import React from 'react';
import WeatherPanel from './WeatherPanel';

class WeatherBody extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    if (this.props.error) {
      return <h1
        className="body-zipcode"
        >
          {this.props.error}
        </h1>
    }
    if (!this.props.weatherInfo) {
      return (<h1
        className="body-zipcode"
        >
          Loading....
        </h1>
      )
    }
    return(
      <div
        className="main-body no-bg"
        id="mainbody"
      ><div
        className="body-zipcode"
      ></div>
      <WeatherPanel
        weatherInfo={this.props.weatherInfo}
        zipcode={this.props.zipcode}
      />
    </div>
    )
  }
}

export default WeatherBody
