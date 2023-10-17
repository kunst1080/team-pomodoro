import { ReactNode, createContext, useContext, useState } from 'react'
import { Config } from './Config'

type ConfigState = {
  config: Config
  updateConfig: (config: Config) => void
}

const defaultConfig: Config = {
  workMinutes: 30,
  shortBreakMinutes: 5,
  longBreakMinutes: 10,
  longBreakFrequency: 2,
  autoStartWork: true,
  autoStartBreak: true,
}

const defaultState: ConfigState = {
  config: defaultConfig,
  updateConfig: (_: Config) => _,
}

const ConfigContext = createContext<ConfigState>(defaultState)

export function ConfigContextProvider({ children }: { children: ReactNode }) {
  console.log('ConfigContextProvider')
  const [config, setConfig] = useState(defaultConfig)
  const updateConfig = (c: Config) => {
    setConfig(c)
  }
  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConfig(): ConfigState {
  return useContext(ConfigContext)
}
