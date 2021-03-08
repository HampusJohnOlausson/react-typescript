import React, { useState, CSSProperties } from 'react'
import Sidebar from './Sidebar';

const Navbar = () => {


    const [showMenu, setShowMenu] = useState(false);

    const showMenu = () => setShowMenu(!showMenu)

    return (
      <div>
        <div>
          <header style={headerStyle}>
            <h2>My page</h2>
            <h2 style={hamburgerStyle} onClick={showMenu}>
              <i className="fas fa-bars"></i>
            </h2>
          </header>
        </div>
      </div>
    );
}

export default Navbar




const headerStyle: CSSProperties = {

    background: 'grey',
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: '1rem',
}

const hamburgerStyle: CSSProperties = {
    cursor: 'pointer',
    fontSize: '3rem',
    margin: '2rem',
    position: 'relative',
    zIndex: 99,
}
