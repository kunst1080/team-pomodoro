import { useState } from 'react'
import { formatTime, now } from './common'

type Props = {
  sessionTime: number
  startTime: number
  stopTime: number
}

function DialComponent(props: Props) {
  const [currentTime, setCurrentTime] = useState(now())

  const timeLabel = formatTime(
    props.sessionTime - (currentTime - props.startTime)
  )
  setTimeout(() => {
    console.log('setTimeout')
    setCurrentTime(now())
  }, 1000)
  console.log('render: DialComponent')
  return <div>{timeLabel}</div>
}

export default DialComponent
