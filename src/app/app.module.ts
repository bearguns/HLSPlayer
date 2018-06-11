import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignComponentsModule } from './shared/modules/materialdesigncomponentsmodule/material-design-components.module';
import { VideoControlsModule } from './shared/modules/video-controls/video-controls.module';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StreamListComponent } from './stream-list/stream-list.component';
import { FooterComponent } from './footer/footer.component';
import { reducers } from './shared/store/store.reducers';
import { VideoPlayerDirective } from './shared/directives/video.directive';
import { VideoControlsComponent } from './video-controls/video-controls.component';
import { StreamsEffects } from './shared/store/effects/streams.effects';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    VideoPlayerComponent,
    StreamListComponent,
    FooterComponent,
    VideoPlayerDirective,
    VideoControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignComponentsModule,
    VideoControlsModule,
    EffectsModule.forRoot([StreamsEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  bootstrap: [AppComponent]
})
export class HLSPlayerAppModule { }
