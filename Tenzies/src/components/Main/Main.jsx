import React from 'react'
import './Main.css'

export default function Main() {
  // Load saved dice state from localStorage or create a new one
  const [nums, setNums] = React.useState(() => {
    const saved = localStorage.getItem('diceGame')
    return saved
      ? JSON.parse(saved)
      : Array(10).fill().map((_, i) => ({
          id: i,
          value: 1,
          isHeld: false
        }))
  })

  // Save to localStorage whenever nums change
  React.useEffect(() => {
    localStorage.setItem('diceGame', JSON.stringify(nums))
  }, [nums])

  const allOnes = nums.every(die => die.value === 1)
  const allHeld = nums.every(die => die.isHeld)
  const allSameValue = nums.every(die => die.value === nums[0].value)
  const won = allHeld && allSameValue && !allOnes

  function rollAll() {
    if (won) return
    setNums(prev =>
      prev.map(die =>
        die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    )
  }

  function hold(id) {
    if (allOnes || won) return
    setNums(oldDice =>
      oldDice.map(die =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    )
  }

  function resetAll() {
    const freshDice = Array(10).fill().map((_, i) => ({
      id: i,
      value: 1,
      isHeld: false
    }))
    setNums(freshDice)
    localStorage.setItem('diceGame', JSON.stringify(freshDice))
  }

  const diceElements = nums.map(die => {
    const styles = {
      backgroundColor: die.isHeld ? '#59E391' : 'white',
      cursor: allOnes || won ? 'not-allowed' : 'pointer',
      opacity: allOnes || won ? 0.7 : 1
    }

    return (
      <button
        key={die.id}
        className='btn'
        style={styles}
        onClick={() => hold(die.id)}
        disabled={allOnes || won}
      >
        {die.value}
      </button>
    )
  })

  return (
    <main>
      <div className='game-box'>
        {won && <h2 className='win-title'> You Won! </h2>}
        <div className='num-c'>{diceElements}</div>
        <div className='btns'>
          <button className='roll-btn' onClick={rollAll}>
            {won ? '🎯 New Game' : 'Roll'}
          </button>
          <button className='reset-btn' onClick={resetAll}>Reset</button>
        </div>
      </div>
    </main>
  )
}
