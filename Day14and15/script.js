import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter'
import { Provider } from 'react-redux'
import stores from './Stores'
import CustomCounter from './CustomCounter'
function App(){
  // console.log(stores.getState())
  return (
    <Provider store={stores}>
      <Counter/>
      <CustomCounter/>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)