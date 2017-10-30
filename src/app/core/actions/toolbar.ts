import { Action } from '@ngrx/store';

export const OPEN_NAV = '[Toolbar] Open Nav';
export const CLOSE_NAV = '[Toolbar] Close Nav';
export const TOGGLE_NAV = '[Toolbar] Toggle Nav';

export class OpenNav implements Action {
  readonly type = OPEN_NAV;
}

export class CloseNav implements Action {
  readonly type = CLOSE_NAV;
}

export class ToggleNav implements Action {
  readonly type = TOGGLE_NAV;
}

export type Actions = OpenNav | CloseNav | ToggleNav;
