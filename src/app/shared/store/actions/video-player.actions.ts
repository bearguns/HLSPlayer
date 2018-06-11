import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { VideoPlayer, VideoPlayerStatus } from '../models/video-player';

export const CHANGE_STATUS        = '[VIDEO] Change Status';
export const CHANGE_LEVEL         = '[VIDEO] Change Level';
export const SET_AVAILABLE_LEVELS = '[VIDEO] Set Levels';

export class ChangeVideoStatus implements Action {
  readonly type = CHANGE_STATUS;

  constructor(public payload: VideoPlayerStatus) {}
}

export class ChangeVideoLevel implements Action {
  readonly type = CHANGE_LEVEL;

  constructor(public payload: VideoPlayer['selectedLevel']) {}
}

export class SetAvailableLevels implements Action {
  readonly type = SET_AVAILABLE_LEVELS;

  constructor(public payload: any) {}
}

export type Actions =
  ChangeVideoStatus |
  ChangeVideoLevel  |
  SetAvailableLevels

