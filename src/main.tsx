import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <body className="h-screen w-screen font-Manrope bg-darkBlue">
      <App />
    </body>
  </React.StrictMode>,
)
