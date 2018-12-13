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
      <Zipcode
        orientation="column"
        className="body-zipcode"
        onSubmit={this.props.onSubmit}/>
      </div>
    </div>);
  }
}

export default DefaultBody
