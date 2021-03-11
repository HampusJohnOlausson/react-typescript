import React, { useState } from 'react'

const Main = () => {

    const [items, setItems] = useState([]);
    
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10 ) + 1
        } ])
    }

    return (
        <div>
            <div>
                <button onClick={addItem}>add a number</button>
            </div>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Main
