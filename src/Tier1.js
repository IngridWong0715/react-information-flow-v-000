import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }



  handleClick = () => {
    // change state color
    let parentColor = getRandomColor();
    this.setState(
      {
      color: parentColor,
      childColor: getReducedColor(parentColor)
      }
    )
  }

  handleTier2Click = () => {
    // when a tier 2 is clicked
    // change both colors
    let tier2Color = getRandomColor();
    this.setState(
      {
        childColor: tier2Color
      }
    )
    return tier2Color;
  }

  render() {
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} changeColor={this.handleTier2Click} />
        <Tier2 color={this.state.childColor} changeColor={this.handleTier2Click}  />
      </div>
    )
  }
}
