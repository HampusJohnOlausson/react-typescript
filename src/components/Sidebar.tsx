import React, { CSSProperties } from 'react'

interface Props  {
    isOpen: boolean;
    onSidebarClose: () => void;
}

export default function Sidebar(props: Props) {

    return (
        <div style={{
            ...styleSidebar, 
            left: props.isOpen ? 0 : '-100%'
        }}
         onClick={props.onSidebarClose}>
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

    position: 'fixed',
    left: '-100%',
    top: 0,
    bottom: 0,
    width: '100%',
    display: 'flex',
    height: '80rem',
    justifyContent: 'space-around',
    background: 'black',
    color: 'white',
    transition: 'left 1s',
}