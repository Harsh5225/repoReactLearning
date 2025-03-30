import React from 'react'
import ReactDOM from 'react-dom/client'

import Acard from './Acard'
import Aheader from './Aheader'
import { Provider } from 'react-redux'
import store2 from './Store2'
const ASwiggy = () => {
  return (
    < Provider store={store2}>
      <Aheader/>
      <Acard/>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<ASwiggy/>)

