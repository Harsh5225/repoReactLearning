import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Add from './Add'

const App = () => {
  const [language,setLanguage] =useState(["TS","JS","Java"])
  function handleclick(){
    setLanguage(["C++",...language]);
  }
  return (
    <>
    <div style={{height:"10vh",display:"flex",justifyContent:"center",gap:"20px"}}>
      {
        language.map((value,index)=><Add key={index} value={value}/>)
      }
    </div>
    <button onClick={handleclick}>Add language</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)