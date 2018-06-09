import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StreamsService } from '../shared/services/streams.service';

interface ComponentState {
  streams: any;
}

@Component({
  selector: 'stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})

export class StreamListComponent {

  streams$: Observable<any>;

  constructor(private store: Store<ComponentState>, private streamsService: StreamsService) {
    this.streams$ = this.store.select('streams');
  }

  ngOnInit() {
    this.streamsService.setStreams();
  }

  setSelectedStream(stream: any) {
    this.streamsService.setSelectedStream(stream);
  }

}
