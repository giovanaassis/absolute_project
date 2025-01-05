import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { KeyNotesProvider } from './context/KeyNotesContext.jsx'
import { SoundWaveProvider } from './context/SoundWaveContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KeyNotesProvider>
      <SoundWaveProvider>
        <App />
      </SoundWaveProvider>
    </KeyNotesProvider>
  </StrictMode>,
)
