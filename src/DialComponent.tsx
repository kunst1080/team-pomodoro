import { useState } from "react"
import { formatTime, now } from "./common"

type Props = {
    startTime: number
    stopTime: number
}

function DialComponent(props: Props) {
    const [currentTime, setCurrentTime] = useState(now())

    const timeLabel = formatTime(currentTime - props.startTime)
    setTimeout(() => {
        console.log("setTimeout")
        setCurrentTime(now())
    }, 1000)
    console.log("render: DialComponent")
    return (
        <div className="clock">
            <div>{timeLabel}</div>
        </div>
    )
}

export default DialComponent
