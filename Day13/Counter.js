import React from 'react'
import { useReducer } from 'react'
const initialState={count:0};

const reducer=(state,action)=>{
switch(action.type){
  case 'increment':
    return {...state,count:state.count+1};
    break;
  case 'decrement':
    return {...state,count:state.count-1};
    break;
  case 'reset':
    return {...state,count:0};
  default:
    return state;
}
}


const Counter = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <h1>{state.count}</h1>
    </div>
  );
};



export default Counter


