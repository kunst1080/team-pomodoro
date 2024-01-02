export type Config = {
  workMinutes: number
  shortBreakMinutes: number
  longBreakMinutes: number
  longBreakFrequency: number
  autoStartWork: boolean
  autoStartBreak: boolean
}

export const defaultConfig: Config = {
  workMinutes: 30,
  shortBreakMinutes: 5,
  longBreakMinutes: 10,
  longBreakFrequency: 2,
  autoStartWork: true,
  autoStartBreak: true,
}
