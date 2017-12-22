import { Action } from '@ngrx/store';

import { Hobby } from '../models/hobby';

export const GET_HOBBIES = '[Hobby] Get';
export const SELECT_HOBBY = '[Hobby] Select';

export class GetHobbies implements Action {
  readonly type = GET_HOBBIES;
  constructor () {}
}

export class SelectHobby implements Action {
  readonly type = SELECT_HOBBY;
  constructor(public payload: number) {}
}

export type Actions = GetHobbies | SelectHobby;
