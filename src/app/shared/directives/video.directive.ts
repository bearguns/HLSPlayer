import { Directive, ElementRef, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as HLS from 'hls.js';

interface Stream {
  title: string,
  src: string
}

@Directive({
  selector: '[appVideo]'
})
export class VideoDirective implements OnInit {

  private streamSubscription: Subscription;

  stream: Stream;
  selectedStream$: Observable<Stream>;
  hls: any;
  h2Element: HTMLElement;
  videoElement: HTMLVideoElement;
  el: ElementRef;

  constructor(el: ElementRef, private _store: Store<Stream>) {
    this.hls = new HLS();
    this.h2Element = document.createElement('h2');
    this.h2Element.classList.add('mat-h2');
    this.videoElement = document.createElement('video');
    this.videoElement.classList.add('video-player-video');
    this.videoElement.style.width = '720px';
    this.selectedStream$ = this._store.select('selectedStream');
    this.el = el;
  }

  ngOnInit() {
    this.el.nativeElement.style.minHeight = '280px';
    this.streamSubscription = this.selectedStream$.subscribe(stream => {
      this.updateVideoPlayer(stream);
    });
  }

  updateVideoPlayer(stream: Stream): void {
    console.log(stream);
    if (!stream.title) return null;
    this.h2Element.innerText = `Now Playing: ${stream.title}`;
    this.el.nativeElement.appendChild(this.h2Element);


    this.videoElement.addEventListener('click', () => {
      this.videoElement.paused ? this.playVideo() : this.pauseVideo();
    });

    if (HLS.isSupported) {
      this.el.nativeElement.appendChild(this.videoElement);
      this.hls.loadSource(stream.src);
      this.hls.attachMedia(this.videoElement);
      this.hls.on(HLS.Events.MANIFEST_PARSED, () => {
        this.playVideo();
      });
    }
  }

  playVideo(): void {
    this.videoElement.play();
  }

  pauseVideo(): void {
    this.videoElement.pause();
  }
}
