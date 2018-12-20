import React from 'react';

class WeatherPanel extends React.Component {
  constructor(props) {
    super(props);
    this.returnDiv = this.returnDiv.bind(this);
    this.createDate = this.createDate.bind(this);

    this.state = {day: -1};

  }
  // handleSubmit(event) {
  //       console.log(event.target);
  //   event.preventDefault();
  //
  // }
  returnDiv(element, index) {
    return (<div>
      {/* <form
          className="forms"
          onSubmit={this.handleSubmit}
        >
        <input
          type="hidden"
          value={index}
          ref={this.hiddenInput}
        />
        <label>
        <input
          className="weather-input"
          type="submit"
          style={{
            opacity: 0
          }}
          value=""
        />
        <img src={`./images/icons/${element[0].icon}.svg`}
          style={{height: "130px"}}/>
        </label>
      </form> */}
      <button
        key={index}
        onClick={() => this.setState({day: index})}
        style={{border: 0}}
      >
        <img
          key={index}
          src={`./images/icons/${element.weather[0].icon}.svg`}
          style={{height: "130px"}}
        />
      </button>
      {element.weather[0].main}<br />{this.createDate(index)}
    </div>);
  }
  createDate(index) {
    var date = new Date();
    date.setTime(date.getTime() + (60 * 60 * 24 * 1000 * index))
    return date.toDateString();
  }
  render() {
    if (this.props.weatherInfo && this.state.day === -1 && this.state.reset === "false") {
      const weather = this.props.weatherInfo.map(this.returnDiv)
      return (
        <div>
          <h2 className="body-button-container subheading">{this.props.zipcode}</h2>
          <div
            className="horizontal-display"
          >{weather}</div>
        </div>
      );
    } else {
      const info = this.props.weatherInfo[this.state.day];
      console.log(info);
      const min_temp = Math.round(info.main.temp_min);
      const max_temp = Math.round(info.main.temp_max);
      return (
        <div className="description-container">
          <h2 className="subheader">
            <img
              src={`./images/icons/${info.weather[0].icon}.svg`}
              style={{height: "130px"}}/>
          </h2>
          <h2 className="subheader">
            Date goes here
          </h2>
          <h2 className="subheader">
            {this.props.zipcode}
          </h2>
          <h2 className="subheader">
            {info.weather[0].description}
          </h2>
          <h2 className="subheader">
            min temp: {min_temp}
          </h2>
          <h2 className="subheader">
            max temp: {max_temp}
          </h2>
          <h2 className="subheader">
            humidity: {info.main.humidity}
          </h2>

      </div>)
    }
  }
}

export default WeatherPanel
