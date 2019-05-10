import React from 'react'
import { useMyHook } from 'use2137'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App