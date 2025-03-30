import React,{useContext} from 'react'
import GlobalContext from './AGlobal'

const Fifth = () => {
  const data=useContext(GlobalContext)
  // console.log(data)
  return (
    <div>
      <h1>Main huu ... {data}</h1>
    </div>
  )
}

export default Fifth
