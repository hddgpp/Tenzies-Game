import React from 'react'
import './Main.css'

export default function Main() {
  const [nums, setNums] = React.useState(
    Array(10).fill(1)
  )

  function randomNum(index) {
    setNums(prev => {
      const newNums = [...prev]
      newNums[index] = Math.floor(Math.random() * 6) + 1
      return newNums
    })
  }

  return (
    <main>
      <div className='num-c'>
        {nums.map((num, i) => (
          <button key={i} className='btn' onClick={() => randomNum(i)}>
            {num}
          </button>
        ))}
      </div>
    </main>
  )
}
