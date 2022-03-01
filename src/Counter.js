import React from "react";

function Counter (props) {
    return (
        <div>
            <h1>Saya Mesin Penghitung</h1>
            <p>Count: {props.count}</p>
            <button>Increment</button>
        </div>
    );
}

export default Counter ;