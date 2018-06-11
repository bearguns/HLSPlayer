export enum StreamStatus {
  LOADING,
  ERROR,
  PLAYING,
  PAUSED,
  SEEKING
}

export interface Stream {
  src:   string,
  title: string,
  levels?: any,
  playbackLevel?: any,
  status?: StreamStatus
}

export interface StreamList {
  streams: Stream[]
}
