import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Video } from '../models/video.model';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  @Input()
  nowPlaying: Video;

}
