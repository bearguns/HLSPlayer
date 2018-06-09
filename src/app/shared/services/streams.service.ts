import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as StreamActions from '../stores/streams/streams.actions';
import * as SelectedStreamActions from '../stores/selected-stream/selected-stream.actions';

const streams: any = [
  {
    src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
    title: 'Big Buck Bunny'
  },
  {
    src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    title: 'Sintel'
  },
  {
    src: 'http://www.streambox.fr/playlists/test_001/stream.m3u8',
    title: 'StreamBox'
  }
];

interface AppState {
  streams: any;
}

@Injectable({
  providedIn: 'root'
})

export class StreamsService {

  streams: any;

  constructor(private store: Store<AppState>) {
    this.streams = streams; // just faking, since we aren't loading streams from an API
  }

  setStreams() {
    console.log('fetching latest streams');
    this.store.dispatch(new StreamActions.FetchStreams(this.streams));
  }

  setSelectedStream(stream: any) {
    console.log('setting selected stream');
    this.store.dispatch(new SelectedStreamActions.SetSelectedStream(stream));
  }
}
