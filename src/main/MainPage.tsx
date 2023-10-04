import viteLogo from '/vite.svg'
import ClockComonent from './ClockComponent'
import { useConfig } from '../ConfigContextProvider'

function MainPage() {
  const config = useConfig()
  return (
    <>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <h1>Team Pomodoro</h1>
      <ClockComonent sessionMinutes={config.workMinutes} />
      <p className="description">hogehoge</p>
    </>
  )
}

export default MainPage
