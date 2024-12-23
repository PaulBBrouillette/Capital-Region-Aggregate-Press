import React from 'react'
import '../css/HeaderCSS.css';
import {NavLink} from "react-router-dom"

export default function Header() {
  return (
    <>
      <header>
        <nav id="NavBar" >
          <div id="Nav-Image">
          <NavLink to="/articles/page/1" className={({ isActive }) => (isActive ? 'active' : '')}><img src={process.env.PUBLIC_URL + "/images/logoblue.png"} alt="CRAP logo" /></NavLink>
          </div>
          <div id="NavBar-Remainder">
            <h2 id="NavBar-Title">
              Capital Region Aggregate Press
            </h2>
            <h3 id="NavBar-Sub">
              <span style={{fontStyle: "italic"}}>"The Capital Region's most reliable news site"</span> - Kathy Hochul
            </h3>
          </div>
        </nav>
      </header>
    </>
  )
}