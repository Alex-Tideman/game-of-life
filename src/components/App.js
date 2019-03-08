import React, { useState } from 'react'
import { useInterval } from '../hooks'

import Life from './Life'

import './App.css'

const seed = []
for (let i = 1; i <= 1000; i++) {
  seed.push(Math.floor((Math.random() * 10000) + 1))
}

function App() {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    setCount(count + 1)
  }, delay)

  return (
    <div className="AppContainer">
      <div className="App">
        <Life seed={seed} count={count} />
      </div>
    </div>
  )
}

export default App
