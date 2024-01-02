import { ReactNode, createContext, useContext, useState } from 'react'
import { Phase, defaultPhase } from './Phase'

type PhaseState = {
  phase: Phase
  updatePhase: (phase: Phase) => void
}

const context = createContext<PhaseState>({
  phase: defaultPhase,
  updatePhase: (_: Phase) => _,
})

export function PhaseContextProvider({ children }: { children: ReactNode }) {
  console.log('ConfigContextProvider')
  const [phase, setPhase] = useState(defaultPhase)
  const updatePhase = (p: Phase) => {
    console.log('updatePhase', p)
    setPhase(p)
  }
  return (
    <context.Provider value={{ phase, updatePhase }}>
      {children}
    </context.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePhase(): PhaseState {
  return useContext(context)
}
