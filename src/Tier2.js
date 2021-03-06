import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'

import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color)
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState(
      {
        childColor: getReducedColor(nextProps.color)
      }
    )
  }

// WHEN TIER 2 IS CLICKED
  // update childColor
  // BEFORE RENDER

  handleClick = (event) => {
    event.stopPropagation();
    let parentColor = this.props.changeColor(); // from tier 1
    this.setState(
      {
        childColor: getReducedColor(parentColor)
      }
    )
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextState.childColor !== this.state.childColor
  }

  handleTier3Click = (event) => {
    event.stopPropagation();
    this.setState(
      {
        childColor : getRandomColor()
      }
    )
  }

  render() {
    return (
      <div className="tier2" onClick={this.handleClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleTier3Click}/>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleTier3Click}/>
      </div>
    )
  }
}
