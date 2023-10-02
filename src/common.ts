export function now(): number {
    return new Date().getTime()
}

export function formatTime(time: number): string {
    const dt = new Date(time)
    if (time > 3600000) {
        return `${padZero(dt.getHours(), 2)}:${padZero(dt.getMinutes(), 2)}:${padZero(dt.getSeconds(), 2)}`
    } else {
        return `${padZero(dt.getMinutes(), 2)}:${padZero(dt.getSeconds(), 2)}`
    }

}

function padZero(v: any, length: number): string {
    return v.toString().padStart(length, '0')
}