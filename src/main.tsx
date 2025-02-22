import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'

import { createRoot } from 'react-dom/client'

import './index.css'

import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
