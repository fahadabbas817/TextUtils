import React from 'react'
import { Link } from 'react-router-dom'


export default function Navebar(props) {
  
 
  
  
  return (
    <>
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <a className="navbar-brand mx-2" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">{props.list1} <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/about">{props.list2} <span className="sr-only"></span></Link>
      </li>
      
    </ul>
    
    <div className="form-check form-switch mx-4">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.mode==="light"? "dark":"light"}`}  htmlFor="flexSwitchCheckDefault" >{props.mode==="dark"? "Day Mode":"Night mode"}</label>
</div>
    
  </div>
</nav>
    </>
  )
}
// // Navebar.defaultProps={
// // title: "Cyber Gamer",
// list1: "New list"
// }
// Navebar.propTypes={
//     title: PropTypes.string.isRequired,
//     list1: PropTypes.number.isRequired,
// }
