import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Increment,Decrement,Reset } from './Slicer1';

const Counter = () => {

  // to access count from store
  // console.log(Increment())
  // console.log(Decrement())
  const count=useSelector((state)=>state.slice1.count);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Counting {count}</h1>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      <button onClick={()=>dispatch(Reset())}>Reset</button>
    </div>
  )
}

export default Counter
