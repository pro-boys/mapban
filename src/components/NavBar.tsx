import React from 'react'
import logo from "../images/logo512.png"

export const NavBar = () => {
  return (
    <nav>
        <button>
            <a href="/" id="brand">Valorant Tools</a>
        </button>
        <img src={logo} alt='logo' />
    </nav>
  )
}
