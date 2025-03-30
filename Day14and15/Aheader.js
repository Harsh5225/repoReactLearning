import React from 'react'
import { useSelector } from 'react-redux'
const Aheader = () => {
  const count=useSelector((state)=>state.slice2.count);
  return (
    <div style={{display:"flex",justifyContent:"center",alignContent:"center",gap:"10px"}}>
      <h1>Wiggy--</h1>
      <h1>Cart: {count}</h1>
    </div>
  )
}

export default Aheader
