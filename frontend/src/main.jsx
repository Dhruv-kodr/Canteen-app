import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="858674854847-qc1llk7v3ktdjml388ih43ntu348tghu.apps.googleusercontent.com">
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>
)
