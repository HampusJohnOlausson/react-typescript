import React from 'react'

interface Props{};

const Item = (props: Props) => {

    const addToCart = () => {
        console.log('added');
    }

    return (
        <div>
            <h2>{}</h2>
            <h4>{}</h4>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Item
