import { useState } from 'react'
import { useConfig } from './ConfigContextProvider'

function ConfigComponent() {
  const c = useConfig()
  const [workTime, setWorkTime] = useState(c.workMinutes)
  const [shortBreakTime, setShortBreakTime] = useState(c.shortBreakMinutes)
  const [longBreakTime, setLongBreakTime] = useState(c.longBreakMinutes)
  const [longBreakFrequency, setLongBreakFrequency] = useState(
    c.longBreakFrequency
  )
  const [autoStartWork, setAutoStartWork] = useState(c.autoStartWork)
  const [autoStartBreak, setAutoStartBreak] = useState(c.autoStartBreak)

  return (
    <>
      <div>
        <label>wotk time</label>
        <input
          type="text"
          value={workTime}
          onChange={(ev) => setWorkTime(parseInt(ev.target.value))}
        />
        min
      </div>
      <div>
        <label>short break time</label>
        <input
          type="text"
          value={shortBreakTime}
          onChange={(ev) => setShortBreakTime(parseInt(ev.target.value))}
        />
        min
      </div>
      <div>
        <label>long break time</label>
        <input
          type="text"
          value={longBreakTime}
          onChange={(ev) => setLongBreakTime(parseInt(ev.target.value))}
        />
        min
      </div>
      <div>
        <label>long break frequency</label>
        <input
          type="text"
          value={longBreakFrequency}
          onChange={(ev) => setLongBreakFrequency(parseInt(ev.target.value))}
        />
        pomodoro
      </div>
      <div>
        <input
          type="checkbox"
          checked={autoStartWork}
          onChange={(ev) => setAutoStartWork(ev.target.checked)}
        />
        <label>auto start work</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={autoStartBreak}
          onChange={(ev) => setAutoStartBreak(ev.target.checked)}
        />
        <label>auto start break</label>
      </div>
    </>
  )
}

export default ConfigComponent
