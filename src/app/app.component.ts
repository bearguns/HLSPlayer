import { Component } from '@angular/core';
import { Video } from './models/video.model';
import { StreamListProviderService } from './stream-list-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nowPlaying: Video;
  availableStreams: Video[];

  title = 'app';

  updateNowPlaying(stream: Video) {
    this.nowPlaying = stream;
  }

  constructor(private streamListProvider: StreamListProviderService) {
    this.availableStreams = streamListProvider.getStreams();
    this.nowPlaying = this.availableStreams[0];
  }
}
