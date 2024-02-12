import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"


export default function Navbar() {
  return <>
  <nav className={`${style.backGround} navbar navbar-expand-lg p-3`}>
  <div className="container">
    <Link className="navbar-brand text-light text-uppercase fw-bold" to={"/"}>Start Framwork</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light text-uppercase fw-bold" to={"about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light text-uppercase fw-bold" to={"portfolio"}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light text-uppercase fw-bold" to={"contact"}>Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  </>
}
