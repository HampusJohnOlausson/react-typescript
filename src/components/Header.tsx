import React, { CSSProperties } from 'react'

export default function Header() {
    return (
        <header style={styleHeader}>
            <h1>Hello my friend</h1>
        </header>
    )
}

const styleHeader: CSSProperties = {
    height: '10rem',
    width: '100%',
    background: 'blue',
}
