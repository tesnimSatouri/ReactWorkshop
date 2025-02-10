import React , { useState } from "react";
const Counter = ({initialCount = 0 , step = 1}) => {
    const [count, setCount] = useState(initialCount);
    return (
        <div> 

            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + step)}>Increment</button>
            <button onClick={() => setCount(count - step)}>Decrement</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>   
        </div>)
}

export default Counter;