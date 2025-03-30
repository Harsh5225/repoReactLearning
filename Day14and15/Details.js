import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Add,Remove} from './Slicer2'
const Details = (props) => {
  const {food,price}=props
  // console.log(Add())
  const [cartIn,setcartin]=useState(false);
  const dispatch=useDispatch();
  function handleClick(){
    if(cartIn==false){
      setcartin(true);
      dispatch(Add())
    }
    else{
      setcartin(false);
      dispatch(Remove());
    }
  }
  return (
    <>
      <h1>food is:{props.food}</h1>
      <h2>{props.price}</h2>
      <button onClick={handleClick}>{cartIn?"Remove":"Add"}</button>
    </>
  )
}

export default Details
