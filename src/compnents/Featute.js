import React, { Component } from 'react';
import reqierauth from './auth/reqierauth';

class Feature extends Component {
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}

export default reqierauth(Feature);
