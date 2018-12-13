import React from 'react';
import Zipcode from './Zipcode';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className='navbar'><h1>Clever title</h1>
        <Zipcode
          onSubmit={this.props.onSubmit}
        /></div>
    );
  }
}

export default Navbar
