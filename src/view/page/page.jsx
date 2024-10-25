import React from 'react'
import { createRoot } from 'react-dom/client'

import ComponentExample from '../components/ComponentExample.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)
  root.render(<ComponentExample />)
})
