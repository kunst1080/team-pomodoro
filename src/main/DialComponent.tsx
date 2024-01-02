import { useState } from 'react'
import { formatTime, now } from '../common'

type Props = {
  sessionTime: number
  startTime: number
  stopTime: number
  onFinished: () => void
}

export function DialComponent(props: Props) {
  const [currentTime, setCurrentTime] = useState(now())

  const t = props.sessionTime - (currentTime - props.startTime)
  if (t <= 0) {
    props.onFinished()
    return <>00:00</>
  }

  const timeLabel = formatTime(t)
  setTimeout(() => {
    console.debug('setTimeout')
    setCurrentTime(now())
  }, 1000)
  console.debug('render: DialComponent')
  return <>{timeLabel}</>
}
