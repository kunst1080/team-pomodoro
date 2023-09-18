type Ticker = () => void

export class Timer {
    timerID: number = 0
    ticker: Ticker

    constructor(ticker: Ticker) {
        this.ticker = ticker;
    }

    start() {
        this.timerID = setInterval(this.ticker, 1000)
    }
    stop() {
        clearInterval(this.timerID)
    }
}
