import React from 'react'

export default function ButtonGCAA(props) {
  const url = props.href ?? "https://gcaa.neticrm.tw/civicrm/contribute/transact?reset=1&id=3"
  const text = props.text ?? "支持綠盟"
  let iconLove, iconNav;
  if (props.WithLove) { iconLove = <span><i class="bi bi-suit-heart-fill"></i></span> }
  if (props.WithNav) { iconNav = <span><i class="bi bi-box-arrow-right"></i></span> }
  return (
    <a
    class="btn btn-primary"
    href={url}
    role="button"
    target="_blank"
    rel="noreferrer"
  >
    { iconLove } { text } { iconNav }
  </a>
  )
}
