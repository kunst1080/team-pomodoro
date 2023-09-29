export function now(): number {
    return new Date().getTime()
}

export function formatTime(time: number): string {
    const dt = new Date(time)
    if (time > 3600000) {
        return `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
    } else {
        return `${dt.getMinutes()}:${dt.getSeconds()}`
    }

}