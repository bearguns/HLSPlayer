import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { StreamListProviderService } from '../stream-list-provider.service';

@Component({
  selector: 'stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})
export class StreamListComponent implements OnInit {

  selectedStream: Video;
  streams: Video[];

  constructor(streamListService: StreamListProviderService) {
    this.streams = streamListService.getStreams();
  }

  ngOnInit() {
  }

}
