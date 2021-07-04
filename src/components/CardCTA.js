import React, { Component } from 'react'
import ButtonDonation from './ButtonDonation'

class CardCTA extends Component {
  render() {
    return (
      <div class="container-fluid p-2">
        <div class="row align-items-center">
          <div class="col">
            <h3>陪伴綠盟走向下一個二十年</h3>
            <ButtonDonation WithNav/>
          </div>
          <div class="col">
            <img 
              src="https://www.getillustrations.com/packs/tuesday-minimal-illustrations-pack/scenes/_1x/nature%20_%20man,%20carry,%20log,%20wood,%20teamwork,%20outdoors_md.png" 
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CardCTA
