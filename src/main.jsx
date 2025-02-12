import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import PomodoroTimer from './components/PomodoroTimer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PomodoroTimer />
  </StrictMode>,
)
