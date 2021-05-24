import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacity = this.props.opacity
    console.log(opacity)
    return (
      <div className="color-box" style={{opacity: opacity /*replace null with the value*/}}>
        {(opacity >= 0.2) ? <ColorBox opacity={opacity -= 0.1}/> : null}
      </div>
    )
  }

}

