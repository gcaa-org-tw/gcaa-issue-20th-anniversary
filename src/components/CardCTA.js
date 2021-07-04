import React, { Component } from 'react'
import ButtonDonation from './ButtonDonation'

const style = {
  width: '100%',
  src: 'https://www.getillustrations.com/packs/tuesday-minimal-illustrations-pack/scenes/_1x/nature%20_%20man,%20carry,%20log,%20wood,%20teamwork,%20outdoors_md.png'
}

class CardCTA extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col">
            <ButtonDonation WithNav/>
          </div>
          <div class="col">
            <img 
              src="https://www.getillustrations.com/packs/tuesday-minimal-illustrations-pack/scenes/_1x/nature%20_%20man,%20carry,%20log,%20wood,%20teamwork,%20outdoors_md.png" 
              style={style}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CardCTA
