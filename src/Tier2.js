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

  handleClick = () => {
    console.log("INITIAL CHILD COLOR: "+this.state.childColor)
    console.log("TIER 2 CLICKED!")
    let parentColor = this.props.changeColor(); // from tier 1
    console.log("NEW TIER 2 COLOR: "+parentColor)

    this.setState(
      {
        childColor: getReducedColor(parentColor)

      }
    )
    console.log("CHILD COLOR SHOULDVE BEEN UPDATED" +this.state.childColor)

  }

  shouldComponentUpdate(nextProps, nextState){
    return nextState.childColor !== this.state.childColor
  }

  handleTier3Click = () => {
    this.setState(
      {
        childColor : getRandomColor()
      }
    )
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.handleClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleTier3Click}/>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleTier3Click}/>
      </div>
    )
  }
}
