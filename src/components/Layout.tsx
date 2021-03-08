import React, { CSSProperties } from 'react'
import Main from './Main'

const Layout = () => {
    return (
        <div style={rootStyle}>
            <Main/>
        </div>
    )
}

export default Layout


const rootStyle: CSSProperties = {
    overflow: 'hidden',
    width: '100%',
}