import React, { CSSProperties } from 'react'

export default function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <div style={burger}>H</div>
                <div>Welcome</div>
            </header>
        </div>
    )
}

const headerStyle: CSSProperties = {

    backgroundColor: 'lightblue',
    height: '10rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2rem',
    fontSize: '2rem'
}
const burger: CSSProperties = {
    cursor: 'pointer',
}
