import React from 'react';
import Zipcode from './Zipcode';

class DefaultBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (<div
    className="main-body"
    id="mainbody">
    <div className="body-button-container">
      <h2 className="subheader white">Enter ZIP Code</h2>
      <Zipcode
        orientation="column"
        className="body-zipcode"
        onSubmit={this.props.onSubmit}/>
      </div>
    </div>);
  }
}

export default DefaultBody
