import './App.css'
import { ConfigContextProvider } from './ConfigContextProvider'
import { PhaseContextProvider } from './PhaseContextProvider'
import { MainPage } from './main/MainPage'
import { SettingPage } from './setting/SettingPage'

function App() {
  return (
    <ConfigContextProvider>
      <PhaseContextProvider>
        <MainPage />
        <SettingPage />
      </PhaseContextProvider>
    </ConfigContextProvider>
  )
}

export default App
