import { useState } from "react"
import { formatTime, now } from "./common"

type Props = {
    startTime: number
    stopTime: number
}

let timerID = 0

function DialComponent(props: Props) {
    const [currentTime, setCurrentTime] = useState(0)


    let stateLabel
    let timeLabel
    if (props.startTime == 0) {
        clearInterval(timerID)
        stateLabel = "作業開始"
        timeLabel = "--:--"
    } else if (props.stopTime == 0) {
        stateLabel = "作業中"
        timeLabel = formatTime(currentTime - props.startTime)
        timerID = setInterval(() => {
            console.log(`timerID: ${timerID}`)
            setCurrentTime(now())
        }, 1000)
    } else {
        clearInterval(timerID)
        stateLabel = "一時停止"
        timeLabel = formatTime(props.stopTime - props.startTime)
    }

    console.log("render: DialComponent")
    return (
        <div className="clock">
            <div>{timeLabel}</div>
            <div>{stateLabel}</div>
        </div>
    )
}

export default DialComponent
