import viteLogo from '/vite.svg'
import { ClockComonent } from './ClockComponent'

export function MainPage() {
  console.debug('render: MainPage')
  return (
    <>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <h1>Team Pomodoro</h1>
      <ClockComonent />
      <p className="description">hogehoge</p>
    </>
  )
}
