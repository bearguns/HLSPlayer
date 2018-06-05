import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/video.model';
import { StreamListProviderService } from '../stream-list-provider.service';

@Component({
  selector: 'stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})
export class StreamListComponent {

  streams: Video[];
  streamListService: any;
  @Output() userSelectedStream: EventEmitter<Video> = new EventEmitter();

  constructor(streamListService: StreamListProviderService) {
    this.streams = streamListService.getStreams();
  }

  setSelectedStream(stream: Video) {
    console.log(stream);
    this.userSelectedStream.emit(stream);
  }
}
