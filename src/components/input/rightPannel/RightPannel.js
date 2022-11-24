import React from 'react'
import "./RightPannel.scss"

export default function RightPannel(props) {
  return (
    <div>     <div className={`sidebar-container${props.showSideBar === true ? ' open' : ''}`}>
    
    <ul className="vertical menu">
      <li><a>Menu Item</a></li>
      <li><a>Menu Item</a></li>
      <li><a>Menu Item</a></li>
      <li><a>Menu Item</a></li>
      <li><a>Menu Item</a></li>
    </ul>
  </div></div>
  )
}
