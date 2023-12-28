import React from 'react'
import { createRoot } from 'react-dom/client'

import Generator from './Generator'

const App = () => {
  return (<Generator />)
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
