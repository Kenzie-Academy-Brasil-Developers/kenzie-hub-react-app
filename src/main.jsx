import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { GlobalStyles } from './Styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense>
    <BrowserRouter>
      <GlobalStyles/>
      <App />
    </BrowserRouter>
  </React.Suspense>
)
