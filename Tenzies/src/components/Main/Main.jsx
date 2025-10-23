import React from 'react'
import './Main.css'

export default function Main() {
  const [nums, setNums] = React.useState(
    Array(10).fill(1)
  )

  function randomNum(index) {
    setNums(prev => {
      const newNums = [...prev]
      newNums[index] = Math.ceil(Math.random() * 6)
      return newNums
    })
  }

  const diceElements = nums.map((num, i) => (
          <button key={i} className='btn' onClick={() => randomNum(i)}>
            {num}
          </button>
        ))

  return (
    <main>
      <div className='num-c'>
        {diceElements}
      </div>
    </main>
  )
}
