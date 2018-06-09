import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignComponentsModule } from './materialdesigncomponentsmodule/material-design-components.module';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StreamListComponent } from './stream-list/stream-list.component';
import { VideoComponent } from './video-player/video/video.component';
import { FooterComponent } from './footer/footer.component';
import { reducers } from './shared/stores/stores.index';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    VideoPlayerComponent,
    StreamListComponent,
    VideoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignComponentsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  bootstrap: [AppComponent]
})
export class HLSPlayerAppModule { }
