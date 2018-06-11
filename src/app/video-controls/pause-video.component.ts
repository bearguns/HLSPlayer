import { Component, ViewChild } from '@angular/core';
import { VideoPlayerStatus } from '../shared/store/models/video-player';
import * as VideoPlayerActions from '../shared/store/actions/video-player.actions';
import { AppState } from '../shared/store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'video-controls-pause',
  template: `<button mat-button (click)="pauseVideo()">Pause</button>`
})
export class PauseVideo {
  constructor(private store: Store<AppState>) {}

  pauseVideo() {
    this.store.dispatch(new VideoPlayerActions.ChangeVideoStatus(VideoPlayerStatus.PAUSED));
  }

}
