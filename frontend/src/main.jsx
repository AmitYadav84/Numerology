import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
        <Toaster />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
