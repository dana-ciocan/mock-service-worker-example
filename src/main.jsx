import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MockServiceWorkerProvider } from './MockServiceWorkerProvider'

createRoot(document.getElementById('root')).render(
  <MockServiceWorkerProvider>
    <App />
  </MockServiceWorkerProvider>
)
