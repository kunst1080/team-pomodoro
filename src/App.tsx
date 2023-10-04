import viteLogo from '/vite.svg'
import './App.css'
import ClockComonent from './ClockComponent'
import ConfigComponent from './ConfigComponent'
import { ConfigContextProvider } from './ConfigContextProvider'

function App() {
  return (
    <ConfigContextProvider>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <ConfigComponent />
      <h1>Team Pomodoro</h1>
      <ClockComonent sessionMinutes={30} />
      <p className="description">hogehoge</p>
    </ConfigContextProvider>
  )
}

export default App
