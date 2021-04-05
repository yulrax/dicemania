import React, { Component } from 'react'
import './style.css';

class ClickMe extends Component {
  constructor(props) {
    super(props)
    this.state = { fade: false }
  }
  render() {
    const fade = this.state.fade

    return (
      <button
        ref='button'
        onClick={() => this.setState({ fade: true })}
        onAnimationEnd={() => this.setState({ fade: false })}
        className={`btn btn-success btn-lg m-4 ${fade ? 'fade' : ''}`}>
        Click me!
      </button>
    )
  }
}

export default ClickMe;