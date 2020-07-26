import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () =>{
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>Child using context_api</h1>
            <h4>Counter Value is :{counterValue[0]}</h4>
            <button onClick={ ()=> {counterValue[1](++counterValue[0])}}>
                Inc Context
            </button>
        </div>
    )
}

export default Child;