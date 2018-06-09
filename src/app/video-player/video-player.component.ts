import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

interface ComponentState {
  selectedStream: {
    title: string,
    src:   string
  }
}
@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  selectedStream$: Observable<any>;

  constructor(private store: Store<ComponentState>) {
    this.selectedStream$ = this.store.select('selectedStream');
  }

}
