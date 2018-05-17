import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'

import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color)
    }
  }

  handleClick = () => {
    let parentColor = getRandomColor();
    this.setState(
      {
        color: parentColor,
        childColor: getReducedColor(parentColor)

      }
    )
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.handleClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} />
        <Tier3 color={this.state.childColor} />
      </div>
    )
  }
}
