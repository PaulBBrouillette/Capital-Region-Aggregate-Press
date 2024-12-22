import React from 'react'
import '../css/HeaderCSS.css';
import {NavLink} from "react-router-dom"

export default function Header() {
  return (
    <>
      <header>
        <nav id="NavBar" >
          <div id="Nav-Image">
            <img src={process.env.PUBLIC_URL + "/images/logo8.png"} alt="CRAP logo" />
          </div>
          <div id="Nav-Links">
            <ul>
              <li><NavLink to="/articles/page/1" className={({ isActive }) => (isActive ? 'active' : '')}>Articles</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}