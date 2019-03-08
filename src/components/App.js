import React, { useState, useRef } from 'react'
import { useInterval } from '../hooks'

import './App.css'

const initialSeed = []
for (let i = 1; i <= 20; i++) {
  initialSeed.push(Math.floor((Math.random() * 100) + 1))
}

function App() {
  const [cells, setCells] = useState(initialSeed)
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    const nextCells = []
    for (let i = 1; i <= 100; i++) {
      if (count === 0) {
        nextCells.push(<Cell i={i} alive={initialSeed.includes(i)} />)  
      } else {
        const alive = i % 3 === 0
        nextCells.push(<Cell i={i} alive={initialSeed.includes(i + count)} />)
      }
    }
    setCells(nextCells)
    setCount(count + 1)
    window.document.title = count + 1
  }, delay)

  return (
    <div className="AppContainer">
      <div className="App">
        <div className="Life">
          {count > 0 ? cells : 'Life Begins...'}
        </div>
      </div>
    </div>
  )
}

export default App

function Cell({ i, alive }) {
  return (
    <div key={i} className={`Cell ${alive ? 'Alive' : 'Dead'}`}>
    </div>
  )
}