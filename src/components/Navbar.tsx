import React, { CSSProperties } from 'react'

const Navbar = () => {
    return (
        <div>
            <header style={headerStyle}>
                <h2>My page</h2>
                <ul style={listStyle}>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar;

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
const listStyle: CSSProperties = {
    listStyle: 'none',
    width: '30%',
    display: 'flex',
    justifyContent: 'space-between',
}
