import viteLogo from '/vite.svg'
import { ClockComonent } from './ClockComponent'
import { useConfig } from '../ConfigContextProvider'

export function MainPage() {
  const { config } = useConfig()

  console.log('render: MainPage')
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
