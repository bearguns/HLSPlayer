import { Component, OnInit } from '@angular/core';
import * as HLS from 'hls.js';

@Component({
  selector: 'video-player-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  hls: any;
  el: any; // Casting this as an HTMLVideoElement causes compiler warnings

  ngOnInit() {
    this.hls = new HLS();
    this.el = document.getElementById('video-player');


    if (HLS.isSupported()) {
      this.hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
      this.hls.attachMedia(this.el);

      this.hls.on(HLS.Events.MANIFEST_PARSED, () => {
        this.el.play();
      });
    }
  }

}
