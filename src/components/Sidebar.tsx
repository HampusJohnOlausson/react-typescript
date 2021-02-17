import React, { CSSProperties } from 'react'

export default function Sidebar() {
    return (
        <div style={styleSidebar}>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Jobs</li>
                <li>Products</li>
            </ul>
        </div>
    )
}

const styleSidebar: CSSProperties = {

    display: 'flex',
    width: '100%',
    height: '80rem',
    justifyContent: 'space-around',
    background: 'black',
    color: 'white',
}