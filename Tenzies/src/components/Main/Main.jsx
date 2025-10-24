import React from 'react'
import './Main.css'

export default function Main() {
  const [nums, setNums] = React.useState(
    Array(10).fill().map(() => ({ value: 1, isHeld: false }))
  )

  function rollAll() {
    setNums(prev =>
       prev.map(() => ({ value: Math.ceil(Math.random() * 6), isHeld: false })))
  }

  const diceElements = nums.map((num, i) => (
    <button key={i} className='btn'>
      {num.value}
    </button>
  ))

  return (
    <main>
      <div className='num-c'>
        {diceElements}
      </div>
      <button className='roll-btn' onClick={rollAll}>Roll</button>
    </main>
  )
}
