import { Stream, StreamList } from './models/stream';
import { Player } from './models/player'

export interface VideoPlayerState {
  readonly selectedStream: Stream,
  readonly streamList: Stream[],
  readonly player: Player
}
