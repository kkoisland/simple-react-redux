import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App, { store } from './App'

render(
  <Provider store={store}>
    <App />
 </Provider>,

  document.getElementById('root')
)