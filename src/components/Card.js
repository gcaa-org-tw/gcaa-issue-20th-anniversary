import React, { Component } from 'react'

const style = {
  width: '100%'
}

class Card extends Component {
  render() {
    return (
      <div class="mdc-layout-grid">
        <img src="./../donation.jpg" style={style} />
      </div>
    )
  }
}

export default Card
