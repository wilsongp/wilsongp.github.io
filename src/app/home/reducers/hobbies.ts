import { createSelector } from '@ngrx/store';

import { Hobby } from '../models/hobby';
import * as hobby from '../actions/hobby';
import { retry } from 'async';
import { stagger } from '@angular/core/src/animation/dsl';

export interface State {
  data: Hobby[];
  selectedId: number;
}

export const initialState: State = {
  data: getHobbies(),
  selectedId: null
};

export function reducer(state = initialState, action: hobby.Actions): State {
  switch ( action.type ) {
    case hobby.GET_HOBBIES:
      return {
        ...state,
        data: getHobbies()
      };
    case hobby.SELECT_HOBBY:
      return {
        ...state,
        selectedId: action.payload
      };
      default:
        return state;
  }
}

export const getSelectedId = (state: State) => state.selectedId;

export function getHobbies() {
  return [
    {
      id: 0,
      title: 'Food',
      description: 'I love baking, cooking, and anything to do with food, really.',
      imageUrl: '/assets/images/babka_1.jpg'
    },
    {
      id: 1,
      title: 'Travel',
      description: 'I\'m always looking to experience new things and places',
      imageUrl: '/assets/images/montreal.jpg'
    }
  ];
}
