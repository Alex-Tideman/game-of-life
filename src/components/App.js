import React, { useState } from 'react'
import { useInterval } from '../hooks'

import './App.css'

const initialSeed = []
for (let i = 1; i <= 300; i++) {
  initialSeed.push(Math.floor((Math.random() * 1000) + 1))
}

const initialCells = []
for (let i = 1; i <= 1000; i++) {
  initialCells.push(<Cell i={i} alive={initialSeed.includes(i) ? 1 : 0} />)  
}

function App() {
  const [cells, setCells] = useState(initialCells)
  const [count, setCount] = useState(0)
  const delay = 50

  useInterval(() => {
    if (count > 0) {
      const nextCells = cells.map((cell, i) => {
        const alive = isAlive(cells, cell, i)
        return <Cell i={i} alive={alive ? 1 : 0} />
      })
      setCells(nextCells)
    }
    setCount(count + 1)
    window.document.title = count + 1  
  }, delay)

  return (
    <div className="AppContainer">
      <div className="App">
      {!count && <h1>Life Begins...</h1>}
      {count && 
        <div className="Life">
          {cells}
        </div>}
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

function isAlive(cells, cell, i) {
  const leftCell = cells[i - 1] ? cells[i - 1].props.alive : 0
  const rightCell = cells[i + 1] ? cells[i + 1].props.alive : 0
  const aboveCell = cells[i - 50] ? cells[i - 10].props.alive : 0
  const belowCell = cells[i + 50] ? cells[i + 10].props.alive : 0
  const leftAboveCell = cells[i - 51] ? cells[i - 11].props.alive : 0
  const rightAboveCell = cells[i - 49] ? cells[i - 9].props.alive : 0
  const leftBelowCell = cells[i + 49] ? cells[i + 9].props.alive : 0
  const rightBelowCell = cells[i + 51] ? cells[i + 11].props.alive : 0

  const aliveNeighbors = leftCell + rightCell + aboveCell + belowCell + leftAboveCell + rightAboveCell + leftBelowCell + rightBelowCell

  let alive = false
  if ((aliveNeighbors === 2 || aliveNeighbors === 3) && cell.props.alive) {
    alive = true
  } else if (aliveNeighbors === 3 && !cell.props.alive) {
    alive = true
  }

  return alive
}