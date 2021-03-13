import React from 'react'
import '../styles/Header.css'
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <header className="header" style={{display: 'flex', justifyContent: 'space-between'}}>
            <strong>APPnna</strong>
            <NavLinks/>
        </header>
    )
}

export default Navbar
