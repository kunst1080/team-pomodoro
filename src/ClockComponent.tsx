import { useState } from "react"
import { Timer } from "./Timer"

function ClockComonent() {
    const [startTime, setStartTime] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const timer = new Timer(() => {
        console.log("tik")
        setCurrentTime(now())
    })
    const start = () => {
        console.log("start")
        setStartTime(now())
        setCurrentTime(now())
        timer.start()
    }
    const pause = () => {
        console.log("pause")
        timer.stop()
    }
    const stop = () => {
        console.log("stop")
        timer.stop()
        setStartTime(0)
    }
    const timeLabel = startTime == 0 ? "停止中" : formatTime(currentTime - startTime)
    console.log("render: ClockComonent")
    return (
        <>
            <div className="clock">
                {timeLabel}
            </div>
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

function now(): number {
    return new Date().getTime()
}

function formatTime(time: number): string {
    const dt = new Date(time)
    if (time > 3600000) {
        return `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
    } else {
        return `${dt.getMinutes()}:${dt.getSeconds()}`
    }

}

export default ClockComonent