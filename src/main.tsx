import React from 'react'
import ReactDOM from 'react-dom/client'

import { LoginScreen } from './screens/LoginScreen';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginScreen />
  </React.StrictMode>,
)
