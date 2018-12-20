import React from 'react';
import Navbar from './Navbar';
import api from './utilities/api';
import DefaultBody from './DefaultBody';
import WeatherBody from './WeatherBody';
import Zipcode from './Zipcode';
import datamangler from './utilities/datamangler';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'form',
      weatherInfo: [],
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
    this.setState({zipcode: zipcode})
    this.getWeatherInfo(zipcode);
    this.setState({view: 'results'});
  }

  getWeatherInfo(zipcode) {
    this.setState({view: 'results'});
    const info = api.queryWeatherApi5dayForecast(zipcode);
    info.then(data => {
      //console.log(data);
      this.setState({weatherInfo: datamangler(data)});
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
          <DefaultBody
            onSubmit={this.handleZipcode}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar
            onSubmit={this.handleZipcode}/>
          <WeatherBody
            weatherInfo={this.state.weatherInfo}
            zipcode={this.state.zipcode}
            error={this.state.error}
          />
        </div>
      )
    }
  }
}

export default App
