import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function questionsReducer(state = initialState.questions, action) {
  switch(action.type) {
    case actionTypes.GET_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}