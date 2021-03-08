import React, { CSSProperties } from 'react'
import Main from './Main'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div style={rootStyle}>
            <Navbar/>
            <Main/>
        </div>
    )
}

export default Layout


const rootStyle: CSSProperties = {
    overflow: 'hidden',
    width: '100%',
}