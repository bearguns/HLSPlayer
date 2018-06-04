import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignComponentsModule } from './materialdesigncomponentsmodule/material-design-components.module';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StreamListComponent } from './stream-list/stream-list.component';
import { VideoComponent } from './video-player/video/video.component';
import { StreamListProviderService } from './stream-list-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    VideoPlayerComponent,
    StreamListComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignComponentsModule
  ],
  providers: [StreamListProviderService],
  bootstrap: [AppComponent]
})
export class HLSPlayerAppModule { }
