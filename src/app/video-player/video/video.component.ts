import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as HLS from 'hls.js';
import { Video } from '../../models/video.model';

@Component({
  selector: 'video-player-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() nowPlaying: Video;

  hls: any;
  el: any; // Casting this as an HTMLVideoElement causes compiler warnings
  metadata: any;

  playCurrentStreamInPlayer() {
    if (HLS.isSupported()) {
      this.hls.loadSource(this.nowPlaying.streamSrc);
      this.hls.attachMedia(this.el);

      this.hls.on(HLS.Events.MANIFEST_PARSED, (event, data) => {
        this.el.play();
      });

      this.hls.on(HLS.Events.FRAG_PARSED, (event, data) => {
        console.log(data);
      })
    }
  }

  ngOnInit() {
    this.hls = new HLS();
    this.el = document.getElementById('hls-content');

    this.playCurrentStreamInPlayer();
  }

  ngOnChanges() {
    this.playCurrentStreamInPlayer();
  }

}
