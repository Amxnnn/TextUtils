/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Frontend/AmanFirst/src/components/about.jsx">{props.aboutText}</Link>
          </li>
          
        </ul>
      </div>
    </div>
    <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input my-3" onClick={props.click} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
  </nav>
  )
}
Navbar.protoTypes = {
  title:PropTypes.string,
  aboutText:PropTypes.string,
} 
