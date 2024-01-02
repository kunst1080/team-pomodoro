import { useEffect, useState } from 'react'
import { DialComponent } from './DialComponent'
import { formatTime, now } from '../common'
import { usePhase } from '../PhaseContextProvider'
import { useConfig } from '../ConfigContextProvider'
import { Phase, defaultPhase } from '../Phase'
import { Config } from '../Config'

type STATE = 'STOP' | 'PROCESSING' | 'PAUSE'

function createNextPhase(config: Config, phase: Phase): Phase {
  if (phase.phase == 'INITIAL') {
    return { phase: 'WORKING', workCount: 1 }
  }
  if (phase.phase == 'WORKING') {
    if (config.longBreakFrequency == phase.workCount) {
      return { phase: 'LONG_BREAKING', workCount: phase.workCount }
    } else {
      return { phase: 'SHORT_BREAKING', workCount: phase.workCount }
    }
  }
  // from breaking
  return { phase: 'WORKING', workCount: phase.workCount + 1 }
}

export function ClockComonent() {
  const { config } = useConfig()
  const { phase, updatePhase } = usePhase()

  const [startTime, setStartTime] = useState(0)
  const [stopTime, setStopTime] = useState(0)
  const [inSwitching, setInSwiching] = useState(false)
  const [state, setState] = useState<STATE>('STOP')

  const sessionTime = config.workMinutes * 60 * 1000

  useEffect(() => {
    if (inSwitching) {
      const newPhase = createNextPhase(config, phase)
      updatePhase(newPhase)
      setInSwiching(false)
    }
  }, [inSwitching, config, phase, updatePhase])

  const start = () => {
    if (state == 'PROCESSING') return
    console.log('start')
    setState('PROCESSING')
    if (startTime == 0) {
      setStartTime(now())
      setInSwiching(true)
    }
    setStopTime(0)
  }
  const pause = () => {
    if (state == 'PAUSE') return
    console.log('pause')
    setState('PAUSE')
    if (stopTime == 0) {
      setStopTime(now())
    }
  }
  const stop = () => {
    console.log('stop')
    setState('STOP')
    setStartTime(0)
    setStopTime(0)
    updatePhase(defaultPhase)
  }
  console.debug('render: ClockComonent')
  return (
    <>
      <div className="clock">
        {state == 'STOP' && (
          <>
            <div>作業開始</div>
            <div className="clock">{formatTime(sessionTime)}</div>
          </>
        )}
        {state == 'PAUSE' && (
          <>
            <div>一時停止</div>
            <div className="clock">
              {formatTime(sessionTime - (stopTime - startTime))}
            </div>
          </>
        )}
        {state == 'PROCESSING' && (
          <>
            <div>作業中</div>
            <div className="clock">
              <DialComponent
                sessionTime={sessionTime}
                startTime={startTime}
                stopTime={stopTime}
                onFinished={() => {
                  console.log('--- on finished')
                  setInSwiching(true)
                }}
              />
            </div>
          </>
        )}
      </div>
      <div className="card">
        <button onClick={start} disabled={state == 'PROCESSING'}>
          start
        </button>
        <button onClick={pause} disabled={state == 'PAUSE' || state == 'STOP'}>
          pause
        </button>
        <button onClick={stop} disabled={state == 'STOP'}>
          stop
        </button>
      </div>
    </>
  )
}
