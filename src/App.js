import React, { Component } from 'react'

import logo from './logo.svg';
import './App.css';
import RollDice from './RollDice'
import Die from './Die'
import ClickMe from './testtest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice />
        {/* <ClickMe /> */}

      </div>
    )
  }
}

export default App;
