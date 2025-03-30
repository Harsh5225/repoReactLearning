import React from 'react'
import ReactDOM from 'react-dom/client'
import { createContext } from 'react'
import ComponentA from './src/ComponentA';
import ComponentB from './src/ComponentB';
import ComponentC from './src/ComponentC';
import Fifth from './Fifth';
export const Data=createContext("Main huu global");
const App = () => {
  const name="Harsh Singh ⭐⭐"
  return (
    <div>
      <Data.Provider value={name}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>

      </Data.Provider>
      <Fifth></Fifth>
    </div>
  )
}

export default App


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)