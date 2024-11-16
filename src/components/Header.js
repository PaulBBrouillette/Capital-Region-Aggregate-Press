import React from 'react'
import './ComponentsCSS.css';
import {NavLink} from "react-router-dom"

export default function Header() {
  return (
    <>
      <header>
        <nav id="NavBar">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/blog/page/1" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink></li>
            <li><NavLink to="/authors" className={({ isActive }) => (isActive ? 'active' : '')}>Authors</NavLink></li>
          </ul>
        </nav>
        <div id="Spacer"></div>
      </header>
    </>
  )
}
