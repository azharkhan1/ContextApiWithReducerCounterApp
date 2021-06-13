import React , {useReducer} from 'react';
import {useCounterContext} from '../App'


const ComponentA = ()=>{
    const counterContext = useCounterContext()
    console.log(counterContext);
    return <div>
        <div>{counterContext.value.counter}</div>
        <button onClick={()=>counterContext.dispatch({type:'INCREAMENT'  , payload:5})}>Increase</button>
        <button onClick={()=> counterContext.value.counter > 0 ? counterContext.dispatch({type:'DECREAMENT' , payload: 1}) : ()=> {return}}>Decrease</button>
        <button>Reset</button>
    </div>
}

export default ComponentA;