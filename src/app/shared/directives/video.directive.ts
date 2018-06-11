import { Directive, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, fromEvent } from 'rxjs';
import * as HLS from 'hls.js';
import { VideoPlayer, VideoPlayerStatus } from '../store/models/video-player';
import { AppState } from '../store/app.state';
import * as VideoPlayerActions from '../store/actions/video-player.actions';
import { map } from 'rxjs/operators';
import { Stream } from '../store/models/stream';

@Directive({
  selector: '[appVideoPlayer]'
})
export class VideoPlayerDirective {

  private element: HTMLVideoElement;
  hls: any;
  videoPlayer: Observable<VideoPlayer>;
  videoPlayerSubscription: Subscription;
  stream: Observable<Stream>;
  streamSubscription: Subscription;

  constructor(private store: Store<AppState>, el: ElementRef) {
    this.element = el.nativeElement;
    this.hls = new HLS({
      startLevel: 2,
      capLevelToPlayerSize: true,

    });
  }

  ngOnInit() {
    this.videoPlayer = this.store.select('videoPlayer');
    this.stream = this.store.select('selectedStream');

    this.streamSubscription = this.stream.subscribe(
      (data: Stream) => { this.establishHlsStream(data) },
      err => console.error(err),
      () => console.log('stream set and fetched')
    )

    this.videoPlayerSubscription = this.videoPlayer.subscribe(
      (data: VideoPlayer) => this.setPlayback(data.status)
    )
  }

  setPlayback(status: VideoPlayerStatus) {
    switch(status) {
      case VideoPlayerStatus.PLAYING:
        this.element.play();
        break;
      case VideoPlayerStatus.PAUSED:
        this.element.pause();
    }
  }

  establishHlsStream(stream: Stream): void {
    console.log(stream);
    this.hls.detachMedia();
    if (HLS.isSupported()) {
      this.hls.attachMedia(this.element);
      this.hls.on(HLS.Events.MEDIA_ATTACHED, () => {
        this.hls.loadSource(stream.src);
        this.hls.on(HLS.Events.MANIFEST_PARSED, (event, data) => {
          this.store.dispatch(new VideoPlayerActions.SetAvailableLevels(data.levels));
          this.hls.off(HLS.Events.LEVEL_LOADED)
        });
      })
    }
  }

}
