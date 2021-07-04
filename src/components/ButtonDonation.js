import React from 'react'

function ButtonDonation(props) {
  let iconLove, iconNav;
  if (props.WithLove) { iconLove = <span><i class="bi bi-suit-heart-fill"></i></span> }
  if (props.WithNav) { iconNav = <span><i class="bi bi-box-arrow-right"></i></span> }
  return (
    <a 
    class="btn btn-primary" 
    href="https://gcaa.neticrm.tw/civicrm/contribute/transact?reset=1&id=3" 
    role="button" 
    target="_blank" 
    rel="noreferrer"
  >
    {iconLove} 支持綠盟 { iconNav }
  </a>      
  )
}

export default ButtonDonation
