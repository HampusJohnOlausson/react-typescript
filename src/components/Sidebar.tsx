import React, { CSSProperties } from 'react'

interface Props{
    isOpen: boolean;
    onSidebarClose: () => void;
}

function Sidebar(props: Props) {
  return (
    <div>
      <div
        style={{
          ...sidebarStyle,
          right: props.isOpen ? 0 : "-100%",
        }}
        onClick={props.onSidebarClose}
      >
        <ul style={listStyle}>
          <li style={{ cursor: "pointer" }}>Home</li>
          <li style={{ cursor: "pointer" }}>About</li>
          <li style={{ cursor: "pointer" }}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar

const sidebarStyle: CSSProperties = {
  position: "fixed",
  bottom: 0,
  top: 0,
  transition: "all 1s",
  width: "100%",
  background: "black",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};


const listStyle: CSSProperties = {
    listStyle: 'none',
    width: '30%',
    height: '40rem',
    display: 'flex',
    justifyContent: 'space-around',
    background: 'black',
    color: 'white',
    flexDirection: 'column',
    fontSize: '3rem'
}
