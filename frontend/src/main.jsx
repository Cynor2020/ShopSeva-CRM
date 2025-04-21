import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import SignUp from './signup.jsx'; // path check karo


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <SignUp/>
  </StrictMode>
)
