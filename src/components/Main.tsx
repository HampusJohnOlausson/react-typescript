import React, { useState } from 'react'

const Main = () => {


    const initalCount = 0;
    const [count, setCount] = useState(initalCount);

const increment = () => {
    setCount(count + 1)
}

const reset = () => {

    setCount(initalCount)
}

const decrease = () => {
    setCount(count - 1)
}

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={reset}>reset</button>
           <button onClick={increment}>increse</button>
           <button onClick={decrease}>decrese</button>
        </div>
    )
}

export default Main
