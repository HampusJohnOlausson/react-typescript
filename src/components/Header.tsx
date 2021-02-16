import { CSSProperties } from "react";

interface Props {
    onMenuClick: () => void;
}

function Header(props: Props) {
    return (
        <header style={headerStyles}>
            <span onClick={props.onMenuClick}>🍔</span>
            <h1>Hello World</h1>
            <span/>
        </header>
    )    
}

const headerStyles: CSSProperties = {

    background: 'blue',
    height: 100,
    position: 'fixed',
    zIndex: 100,
    left: 0,
    top: 0,
    right: 0, 
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}

const burger: CSSProperties = {

    cursor: 'pointer',
}

export default Header