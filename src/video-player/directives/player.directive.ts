import { Directive, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as HLS from 'hls.js';
import { Player, PlayerStatus } from '../store/models/player';
import * as PlayerActions from '../store/actions/player.actions';
import { Stream } from '../store/models/stream';
import { VideoPlayerState } from '../store/store.state';
import { getSelectedStreamState, getPlayerState } from '../store/reducers';

@Directive({
  selector: '[appVideoPlayer]'
})
export class VideoPlayerDirective {

  private element: HTMLVideoElement;
  hls: any;
  stream$: any;
  player$: any;

  constructor(private store: Store<VideoPlayerState>, el: ElementRef) {
    this.element = el.nativeElement;

  }

  ngOnInit() {
    this.stream$ = this.store.select(getSelectedStreamState);
    this.player$ = this.store.select(getPlayerState);
    this.stream$.subscribe(
      (data: any) => {
        this.establishHlsStream(data)
      },
      err => console.error(err),
      () => console.log('stream set and fetched')
    )

    this.player$.subscribe(
      (data: any) => this.setPlayback(data.status)
    )
  }

  setPlayback(status: PlayerStatus) {
    switch(status) {
      case PlayerStatus.PLAYING:
        this.element.play();
        break;
      case PlayerStatus.PAUSED:
        this.element.pause();
    }
  }

  establishHlsStream(stream: Stream): void {
    if (this.hls) {
      this.hls.destroy();
    }
    this.hls = new HLS({
      startLevel: 2,
      capLevelToPlayerSize: true,
    });
    if (HLS.isSupported()) {
      this.hls.attachMedia(this.element);
      this.hls.loadSource(stream.src);
        this.hls.on(HLS.Events.MANIFEST_PARSED, (event, data) => {
          this.store.dispatch(new PlayerActions.SetAvailableLevels(data.levels));
        });
    }
  }

}
