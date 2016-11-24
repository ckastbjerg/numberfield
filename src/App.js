import React, { Component } from 'react';
import NumberField from './NumberField';

class App extends Component {
  render() {
    return (
      <NumberField
          onValueChanged={val => console.log('NumberField changed: ', val)}
          value={10}
          min={1}
          max={100}
      />
    );
  }
}

export default App;
