import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgMaterialModule } from '../ng-material/ng-material.module';
import { reducers } from './store/reducers';
import { StreamEffects } from './store/effects/stream.effects';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoPlayerDirective } from './directives/player.directive';
import { StreamListComponent } from './components/stream-list/stream-list.component';
import { VideoControlsComponent } from './components/video-control-panel/video-controls.component';
import { PauseVideo } from './components/video-player-controls/pause-video.component';
import { PlayVideo } from './components/video-player-controls/play-video.component';



@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule,
    StoreModule.forFeature('videoPlayer', reducers),
    EffectsModule.forFeature([StreamEffects])
  ],
  exports: [VideoPlayerComponent, VideoControlsComponent, StreamListComponent, PauseVideo, PlayVideo],
  declarations: [VideoPlayerComponent, VideoControlsComponent, VideoPlayerDirective, StreamListComponent, PauseVideo, PlayVideo]
})
export class VideoPlayerModule { }
