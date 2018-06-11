import { Component, ViewChild } from '@angular/core';
import { AppState } from '../shared/store/app.state';
import * as VideoPlayerActions from '../shared/store/actions/video-player.actions';
import { Store } from '@ngrx/store';
import { VideoPlayerStatus } from '../shared/store/models/video-player';

@Component({
  selector: 'video-controls-play',
  template: `<button mat-button (click)="playVideo()">Play</button>`
})
export class PlayVideo {
  constructor(private store: Store<AppState>) {}

  playVideo() {
    this.store.dispatch(new VideoPlayerActions.ChangeVideoStatus(VideoPlayerStatus.PLAYING));
  }

}
