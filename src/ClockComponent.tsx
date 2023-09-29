import { useState } from "react"
import DialComponent from "./DialComponent"
import { now } from "./common"

function ClockComonent() {
    const [startTime, setStartTime] = useState(0)
    const [stopTime, setStopTime] = useState(0)

    const start = () => {
        console.log("start")
        setStartTime(now())
        setStopTime(0)
    }
    const pause = () => {
        console.log("pause")
        // setStartTime(startTime)
        setStopTime(now())
    }
    const stop = () => {
        console.log("stop")
        setStartTime(0)
        setStopTime(0)
    }
    console.log("render: ClockComonent")
    return (
        <>
            <DialComponent startTime={startTime} stopTime={stopTime} />
            <div className="card">
                <button onClick={start}>
                    start
                </button>
                <button onClick={pause}>
                    pause
                </button>
                <button onClick={stop}>
                    stop
                </button>
            </div>
        </>
    )
}

export default ClockComonent