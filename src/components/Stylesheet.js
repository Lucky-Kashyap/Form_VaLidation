import React from 'react'
import './style.css';
function Stylesheet(props) {
    let className = props.isValue ? 'demo' :'';
  return (
    <div className={className}>Stylesheet</div>
  )
}

export default Stylesheet