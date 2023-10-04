import { ReactNode, createContext, useContext } from 'react'
import Config from './Config'

const defaultValue: Config = {
  workMinutes: 30,
  shortBreakMinutes: 5,
  longBreakMinutes: 10,
  longBreakFrequency: 2,
  autoStartWork: true,
  autoStartBreak: true,
}

const ConfigContext = createContext<Config>(defaultValue)

export function ConfigContextProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigContext.Provider value={defaultValue}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext)
}
