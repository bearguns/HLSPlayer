import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../shared/store/app.state';
import { Stream } from '../shared/store/models/stream';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  selectedStream$: Observable<Stream>;
  streamSubscription: Subscription;

  constructor(private store: Store<AppState>) {
    this.selectedStream$ = this.store.select('selectedStream');
  }

}
