import React from 'react'
import './Main.css'

export default function Main() {
  const [nums, setNums] = React.useState(Array(10).fill(1))

  // this function rolls all dice at once
  function rollAll() {
    setNums(prev => prev.map(() => Math.ceil(Math.random() * 6)))
  }

  // each button now just shows the number, no click handler
  const diceElements = nums.map((num, i) => (
    <button key={i} className='btn'>
      {num}
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
