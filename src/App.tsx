import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Team Pomodoro</h1>
      <div className="card">
        99:99
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          start
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          pause
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          stop
        </button>
      </div>
      <p className="description">
        hogehoge
      </p>
    </>
  )
}

export default App
