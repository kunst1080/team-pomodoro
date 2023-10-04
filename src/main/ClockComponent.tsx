import { useState } from 'react'
import DialComponent from './DialComponent'
import { formatTime, now } from '../common'

type STATE = 'STOP' | 'PROCESSING' | 'PAUSE'

type Props = {
  sessionMinutes: number
}

function ClockComonent(props: Props) {
  const [startTime, setStartTime] = useState(0)
  const [stopTime, setStopTime] = useState(0)
  const [state, setState] = useState<STATE>('STOP')

  const sessionTime = props.sessionMinutes * 60 * 1000

  const start = () => {
    if (state == 'PROCESSING') return
    console.log('start')
    setState('PROCESSING')
    if (startTime == 0) {
      setStartTime(now())
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
  }
  console.log('render: ClockComonent')
  return (
    <>
      <div className="clock">
        {state == 'STOP' && (
          <>
            <div>作業開始</div>
            <div className="clock">
              <div>{formatTime(sessionTime)}</div>
            </div>
          </>
        )}
        {state == 'PAUSE' && (
          <>
            <div>一時停止</div>
            <div className="clock">
              <div>{formatTime(sessionTime - (stopTime - startTime))}</div>
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

export default ClockComonent
