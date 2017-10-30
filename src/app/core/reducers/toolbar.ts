import * as toolbar from '../actions/toolbar';

export interface State {
  showNav: boolean;
}

const initialState: State = {
  showNav: false,
};

export function reducer(state = initialState, action: toolbar.Actions): State {
  switch (action.type) {
    case toolbar.CLOSE_NAV:
      return {
        showNav: false,
      };
    case toolbar.OPEN_NAV:
      return {
        showNav: true,
      };
    case toolbar.TOGGLE_NAV:
      return {
        showNav: !state.showNav,
      };
    default:
      return state;
  }
}

export const getShowNav = (state: State) => state.showNav;
