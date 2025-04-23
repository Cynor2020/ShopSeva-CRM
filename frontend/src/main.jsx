import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';

import SignUp from './signup.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUp/>
  </StrictMode>
)
