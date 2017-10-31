import { FETCH_FAQ } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FAQ:
      return action.payload;
    default:
      return state;
  }
}
