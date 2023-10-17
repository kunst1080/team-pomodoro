import './App.css'
import { ConfigContextProvider } from './ConfigContextProvider'
import { MainPage } from './main/MainPage'
import { SettingPage } from './setting/SettingPage'

function App() {
  return (
    <ConfigContextProvider>
      <MainPage />
      <SettingPage />
    </ConfigContextProvider>
  )
}

export default App
