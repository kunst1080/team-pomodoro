export type PhaseType =
  | 'INITIAL'
  | 'WORKING'
  | 'SHORT_BREAKING'
  | 'LONG_BREAKING'

export type Phase = {
  phase: PhaseType
  workCount: number
}

export const defaultPhase: Phase = {
  phase: 'INITIAL',
  workCount: 0,
}
