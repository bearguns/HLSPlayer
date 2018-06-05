import { Injectable } from '@angular/core';
import { Video } from './models/video.model';

@Injectable({
  providedIn: 'root'
})

export class StreamListProviderService {

  streamList: Video[] = [
    new Video('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8', 'Big Buck Bunny', 'A wonderful, family-friendly short featuring the bludgeoning-to-death of a butterfly, and the violent revenge of a human-sized rabbit. 10/10 would stream again.', 'superStrimmer18'),
    new Video('https://video-dev.github.io/streams/test_001/stream.m3u8', 'Arte China Live Feed', 'Your live feed of the number one Arte programming channel in all of China, bringing you the artes, your favorite arteists, arte films, and lots of shouting.', 'learteiste1984')
  ];

  getStreams():Video[] {
    return this.streamList;
  }

}
