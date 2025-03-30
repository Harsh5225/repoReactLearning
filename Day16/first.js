import React from 'react'
import ReactDOM from 'react-dom/client'
import Bitcoincreate from './Bitcoincreate'
import { Provider } from 'react-redux'
import stores from './stores1'
function App(){
  return(
   <Provider store={stores}>
   <Bitcoincreate/>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)