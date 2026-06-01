import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WithNumber from './WithNumber.jsx'
import WithStrings from './WithStrings.jsx'
import GetInput from './GetInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WithNumber />
    <WithStrings />

    <GetInput />
  </StrictMode>,
)
