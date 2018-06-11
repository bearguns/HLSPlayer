import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { StoreModule }              from '@ngrx/store';
import { StoreDevtoolsModule }      from '@ngrx/store-devtools';
import { EffectsModule }            from '@ngrx/effects';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { NgMaterialModule } from '../ng-material/ng-material.module';
import { VideoPlayerModule } from '../video-player/video-player.module';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppFooterComponent } from './components/app-footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    VideoPlayerModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  bootstrap: [AppComponent]
})
export class HLSPlayerAppModule { }
