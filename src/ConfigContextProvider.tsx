import { ReactNode, createContext, useContext, useState } from 'react'
import { Config, defaultConfig } from './Config'

type ConfigState = {
  config: Config
  updateConfig: (config: Config) => void
}

const context = createContext<ConfigState>({
  config: defaultConfig,
  updateConfig: (_: Config) => _,
})

export function ConfigContextProvider({ children }: { children: ReactNode }) {
  console.log('ConfigContextProvider')
  const [config, setConfig] = useState(defaultConfig)
  const updateConfig = (c: Config) => {
    setConfig(c)
  }
  return (
    <context.Provider value={{ config, updateConfig }}>
      {children}
    </context.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConfig(): ConfigState {
  return useContext(context)
}
