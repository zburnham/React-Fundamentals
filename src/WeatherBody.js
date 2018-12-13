import React from 'react';

class WeatherBody extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    console.log(this.props.error);
    if (this.props.error) {
      console.log("error called");
      return <h1
        className="body-zipcode"
        >
          {this.props.error}
        </h1>
    }
    if (!this.props.weatherInfo.main) {
      console.log("Loading called");
      return <h1
        className="body-zipcode"
        >
          Loading....
        </h1>
    }

    const {temp,pressure,temp_min,temp_max} = this.props.weatherInfo.main;
    return (
      <div
        className="main-body no-bg"
        id="mainbody"
      ><div
        className="body-zipcode"
      >Sample {temp}</div>
    </div>
    )
  }
}

export default WeatherBody
