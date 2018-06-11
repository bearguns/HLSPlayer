import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AppState } from '../shared/store/app.state';
import * as StreamsActions from '../shared/store/actions/streams.actions';
import * as SelectedStreamActions from '../shared/store/actions/selected-stream.actions';
import { Stream } from '../shared/store/models/stream';

@Component({
  selector: 'stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})

export class StreamListComponent {

  streams$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.streams$ = this.store.select('streams');
  }

  ngOnInit() {
    this.store.dispatch(new StreamsActions.FetchStreams());
  }

  setSelectedStream(stream: Stream) {
    console.log('setting stream', stream)
    this.store.dispatch(new SelectedStreamActions.SetSelectedStream(stream));
  }

}
