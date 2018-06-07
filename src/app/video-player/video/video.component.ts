import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as HLS from 'hls.js';
import { Video } from '../../models/video.model';
import { PlayerStatus } from '../../shared/player-model';

@Component({
  selector: 'video-player-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() nowPlaying: Video;
  @ViewChild('video') video;

  hls: any;
  streamSrc: string;
  firstLevel: any;
  defaultHeight: number;
  playerStatus: PlayerStatus;

  playCurrentStreamInPlayer() {
    if (HLS.isSupported() && this.hls) {
      this.hls.loadSource(this.nowPlaying.streamSrc);
      this.hls.attachMedia(this.video);

      this.hls.on(HLS.Events.MANIFEST_PARSED, (event, data) => {
        this.play();
      });
    }
  }

  play(): void {
    this.playerStatus = PlayerStatus.PLAYING;
    this.video.play();
  }

  pause(): void {
    this.playerStatus = PlayerStatus.PAUSED;
    this.video.pause();
  }

  userClickedVideo(): void {
    switch (this.playerStatus) {
      case PlayerStatus.PLAYING:
        this.pause();
        break;
      case PlayerStatus.PAUSED:
      this.play();
      break;
    }
  }

  constructor() {}

  ngOnInit() {
    this.hls = new HLS();
    this.video = this.video.nativeElement;
    this.playCurrentStreamInPlayer();
  }

  ngOnChanges() {
    this.playCurrentStreamInPlayer();
  }

}
