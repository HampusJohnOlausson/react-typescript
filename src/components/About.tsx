import React, { CSSProperties } from 'react'

const About = () => {
    return (
        <div style={aboutStyle}>
          <h1>About</h1>  
        </div>
    )
}

export default About


const aboutStyle: CSSProperties = {
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}