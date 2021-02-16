import { CSSProperties } from "react";

interface Props {
    isOpen: boolean;
    onSidebarClose: () => void;
}

function Sidebar(props: Props) {
    return (
        <aside
            // style={{
            //     ...rootStyle,
            //     left: props.isOpen ? 0 : '-100%'
            // }}
            style={rootStyle(props)}
            onClick={props.onSidebarClose}
        >
            <h2 style={linkStyles}>Home</h2>
            <h2 style={linkStyles}>Pricing</h2>
            <h2 style={linkStyles}>About Us</h2>
            <h2 style={linkStyles}>Contact</h2>
        </aside>
    );
}

const rootStyle = (props: Props): CSSProperties => ({
    position: 'fixed',
    left: props.isOpen ? 0 : '-100%',
    top: 0,
    bottom: 0,
    width: '100%',
    background: props.isOpen ? 'black' : 'transparent',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 1s'
})

const linkStyles: CSSProperties = {
    cursor: 'pointer',
}

export default Sidebar;