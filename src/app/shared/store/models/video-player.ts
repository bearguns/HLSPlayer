export enum VideoPlayerStatus {
  LOADING,
  ERROR,
  PLAYING,
  PAUSED,
  SEEKING
}

export interface VideoPlayer {
  status: VideoPlayerStatus,
  duration?: number,
  selectedLevel?: any,
  levels?: any
}
