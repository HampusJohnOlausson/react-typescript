import React, { CSSProperties } from 'react'
import Sidebar from './Sidebar'

interface State{
    isSidebarOpen: boolean;
}
interface Props{
}

export default class Navbar extends React.Component<Props, State> {

    state: State = {
        isSidebarOpen: false
    }

    toggleSidebar = (props: Props) => {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
    }

    render() {
        return (
          <div>
            <header style={headerStyle}>
              <h2>My page</h2>
              <h2 onClick={this.toggleSidebar} style={hamburgerStyle}>
                <i className="fas fa-bars"></i>
              </h2>
            </header>
            <Sidebar isOpen={this.state.isSidebarOpen}
             onSidebarClose={this.toggleSidebar}
             />
          </div>
        );
    }
}



const headerStyle: CSSProperties = {

    background: 'grey',
    width: '100%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: '1rem',
}

const hamburgerStyle: CSSProperties = {
    cursor: 'pointer',
    fontSize: '3rem',
    margin: '2rem',
    position: 'relative',
    zIndex: 99,
}
