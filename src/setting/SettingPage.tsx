import { useConfig } from '../ConfigContextProvider'

export function SettingPage() {
  const { config, updateConfig } = useConfig()

  console.log('render: SettingPage')
  return (
    <>
      <div>
        <label>wotk time</label>
        <input
          type="text"
          value={config.workMinutes}
          onChange={(ev) =>
            updateConfig({ ...config, workMinutes: parseInt(ev.target.value) })
          }
        />
        min
      </div>
      <div>
        <label>short break time</label>
        <input
          type="text"
          value={config.shortBreakMinutes}
          onChange={(ev) =>
            updateConfig({
              ...config,
              shortBreakMinutes: parseInt(ev.target.value),
            })
          }
        />
        min
      </div>
      <div>
        <label>long break time</label>
        <input
          type="text"
          value={config.longBreakMinutes}
          onChange={(ev) =>
            updateConfig({
              ...config,
              longBreakMinutes: parseInt(ev.target.value),
            })
          }
        />
        min
      </div>
      <div>
        <label>long break frequency</label>
        <input
          type="text"
          value={config.longBreakFrequency}
          onChange={(ev) =>
            updateConfig({
              ...config,
              longBreakFrequency: parseInt(ev.target.value),
            })
          }
        />
        pomodoro
      </div>
      <div>
        <input
          type="checkbox"
          checked={config.autoStartWork}
          onChange={(ev) =>
            updateConfig({
              ...config,
              autoStartWork: ev.target.checked,
            })
          }
        />
        <label>auto start work</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={config.autoStartBreak}
          onChange={(ev) =>
            updateConfig({
              ...config,
              autoStartBreak: ev.target.checked,
            })
          }
        />
        <label>auto start break</label>
      </div>
    </>
  )
}
