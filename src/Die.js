import React, { Component } from 'react'
import './Die.css';

class Die extends Component {
  render () {
    return (
      <span>
      <i className={`animate__animated  ${this.props.w ? "animate__wobble" : null } fas fa-dice-${this.props.r} fa-5x m-4 big-icon fa-cog`}></i>
      </span>
    )
  }

}

export default Die;