import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as HLS from 'hls.js';
import { PlayerStatus } from '../../shared/player-model';

@Component({
  selector: 'video-player-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() nowPlaying: any;
  @ViewChild('video') video;

  hls: any;
  firstLevel: any;
  defaultHeight: number;
  playerStatus: PlayerStatus;

  playCurrentStreamInPlayer() {
    if (HLS.isSupported() && this.hls) {
      this.hls.loadSource(this.nowPlaying.src);
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
