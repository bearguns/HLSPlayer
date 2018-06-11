import { VideoPlayer } from './models/video-player';
import { Stream } from './models/stream';
import { Streams } from './models/streams';

export interface AppState {
  readonly videoPlayer: VideoPlayer;
  readonly streams: Streams;
  readonly stream: Stream;
}
