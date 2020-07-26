import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';
import Child from './Child';

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1);

    return(
        <div>
            <h1>Child using CounterReducer</h1>
    <h4>Value of the reducer state is: {state}</h4>
            <button onClick={()=>dispatch('INCREMENT')}>
                Inc Reducer
            </button>
        </div>
    )
}

export default Child2;