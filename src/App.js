import React from 'react';
import Navbar from './Navbar';
import api from './utilities/api';
//import ReactRouter from 'react-router-dom';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DefaultBody from './DefaultBody';
import WeatherBody from './WeatherBody';
import Zipcode from './Zipcode';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'form',
      currentWeather: {},
      zipcode: '',
      error: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.handleZipcode = this.handleZipcode.bind(this);
  }

  handleInput() {
    if (this.state.view === 'form') {
      this.setState({
        view: 'results'
      });
    } else {
      this.setState({
        view:'form'
      });
    }
  }

  handleZipcode(zipcode) {
    this.getWeatherInfo(zipcode);
  }

  getWeatherInfo(zipcode) {
    this.setState({view: 'results'});
    const info = api.queryWeatherApi5dayForecast(zipcode);
    info.then(data => {
      this.setState({currentWeather: data});
    }).catch(data => {
      this.setState({error: data.message});
    });
  }

  render() {
    if (this.state.view === 'form') {
      return (
        <div className="fullheight">
          <Navbar
            onSubmit={this.handleZipcode}
          />
          <DefaultBody /> //form
        </div>
      );
    } else {
      return (
        <div>
          <Navbar
            onSubmit={this.handleZipcode}/>
          <WeatherBody
            weatherInfo={this.state.currentWeather}
            error={this.state.error}
          />
        </div>
      )
    }
  }
}

export default App
