import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Player, PlayerStatus } from '../models/player'

export const CHANGE_STATUS        = '[VIDEO] Change Status';
export const CHANGE_LEVEL         = '[VIDEO] Change Level';
export const SET_AVAILABLE_LEVELS = '[VIDEO] Set Levels';

export class ChangePlayerStatus implements Action {
  readonly type = CHANGE_STATUS;

  constructor(public payload: PlayerStatus) {}
}

export class ChangePlayerLevel implements Action {
  readonly type = CHANGE_LEVEL;

  constructor(public payload: Player['selectedLevel']) {}
}

export class SetAvailableLevels implements Action {
  readonly type = SET_AVAILABLE_LEVELS;

  constructor(public payload: any) {}
}

export type Actions =
  ChangePlayerStatus |
  ChangePlayerLevel  |
  SetAvailableLevels

