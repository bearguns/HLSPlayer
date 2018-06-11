import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Streams } from '../models/streams';
import * as StreamsActions from '../actions/streams.actions';

const streams: Streams = {
  streams: [
    {
      title: 'Sintel',
      src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    },
    {
      title: 'Big Buck Bunny',
      src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
    }
  ]
};

@Injectable()
export class StreamsEffects {
  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(StreamsActions.FETCH_STREAMS),
    map(action => ({ type: StreamsActions.SET_STREAMS, payload: streams.streams }))
  );

  constructor(private actions$: Actions) {}
}
