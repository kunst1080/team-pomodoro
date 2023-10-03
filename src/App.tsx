import viteLogo from '/vite.svg'
import './App.css'
import ClockComonent from './ClockComponent'

function App() {
  return (
    <>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <h1>Team Pomodoro</h1>
      <ClockComonent sessionMinutes={30} />
      <p className="description">
        hogehoge
      </p>
    </>
  )
}

export default App