import React, { useState } from 'react'

const NavLinks = () => {


    const [showMenu, setShowMenu] = useState(false);

    let menu;

    if(showMenu){
        menu = <div > This is the menu</div>
    }

    return (
        <div>
            <nav>
                <h2 onClick={() => setShowMenu(!showMenu)}>B</h2>

                { menu }
            </nav>
        </div>
    )
}

export default NavLinks
