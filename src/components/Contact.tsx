import React, { CSSProperties } from 'react'

const Contact = () => {
    return (
        <div style={contactStyle}>
            <h1>Contact</h1>
        </div>
    )
}

export default Contact


const contactStyle: CSSProperties = {
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};