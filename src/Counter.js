import React from "react";
import { connect } from 'react-redux'


function Counter (props) {
    console.log('render =>', props)
    return (
        <div>
            <h1>Saya Mesin Penghitung</h1>
            <p>Count: {props.count}</p>
            <button>Increment</button>
        </div>
    );
}

function mapStatetoProps(state){
    console.log('mapStatetoProps', state);
    return {
        count : state.count
    }
}

export default connect(mapStatetoProps)(Counter);