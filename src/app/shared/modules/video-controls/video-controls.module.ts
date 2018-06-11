import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignComponentsModule } from '../materialdesigncomponentsmodule/material-design-components.module';

import { PlayVideo } from '../../../video-controls/play-video.component';
import { PauseVideo } from '../../../video-controls/pause-video.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignComponentsModule
  ],
  exports: [
    PlayVideo,
    PauseVideo,
    MaterialDesignComponentsModule
  ],
  declarations: [PlayVideo, PauseVideo]
})
export class VideoControlsModule { }
