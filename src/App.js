import React, { Component } from 'react';
import Header from './component/header';
import Seats from './component/seats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Seats/>
      </div>
    );
  }
}

export default App;
