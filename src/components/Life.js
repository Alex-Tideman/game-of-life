import React, { useState, useEffect } from 'react'

export default function Life({ seed, count }) {
  const cells = []
  for (let i = 1; i <= 10000; i++) {
    let alive = true
    if (count === 0) {
      alive = seed.includes(i)
    } else {
      alive = false
    }
    cells.push(<Cell i={i} alive={alive} />)
  }

  useEffect(() => {
    window.document.title = count
  }, [count])

  return (
    <div className="Life">
      {cells}
    </div>
  )
}

function Cell({ i, alive }) {
  return (
    <div key={i} className={`Cell ${alive ? 'Alive' : 'Dead'}`}>
    </div>
  )
}