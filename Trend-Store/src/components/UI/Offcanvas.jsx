import React, { Fragment } from 'react'
import ReactDOM from "react-dom"
import "./Offcanvas.css"
const Offcanvas = (props) => {


  return (
    <Fragment>
      <div onClick={props.closeCartHandler} className="backdrop"></div>
      <div className='offcanvas'>
        <div className="content">
            {props.children}
        </div>
      </div>      
    </Fragment>
  ) 
}

export default Offcanvas
