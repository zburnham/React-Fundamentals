import React from 'react';
import Navbar from './Navbar';
import Api from './utilities/api';
import DefaultBody from './DefaultBody';
import WeatherBody from './WeatherBody';

class App extends React.Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <WeatherBody />
    </div>
    );
  }
}

export default App
