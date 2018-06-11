import { Component } from '@angular/core';
import * as PlayerActions from '../../store/actions/player.actions';
import { Store } from '@ngrx/store';
import { PlayerStatus } from '../../store/models/player';
import { VideoPlayerState } from '../../store/store.state';

@Component({
  selector: 'player-controls-play',
  template: `<button mat-button (click)="playVideo()">Play</button>`
})
export class PlayVideo {
  constructor(private store: Store<VideoPlayerState>) {}

  playVideo() {
    this.store.dispatch(new PlayerActions.ChangePlayerStatus(PlayerStatus.PLAYING));
  }

}
