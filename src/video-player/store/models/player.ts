export enum PlayerStatus {
  LOADING,
  ERROR,
  PLAYING,
  PAUSED,
  SEEKING
}

export interface Player {
  status: PlayerStatus,
  duration?: number,
  selectedLevel?: any,
  levels?: any
}
