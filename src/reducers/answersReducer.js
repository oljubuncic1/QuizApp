import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function answersReducer(state = initialState.answers, action) {
  switch(action.type) {
    case actionTypes.SET_INITIAL_ANSWER_SUCCESS:
      return action.answers;
    case actionTypes.ANSWER_QUESTION_SUCCESS:
      return state.map((answer, index) => index === action.answerIndex ? action.answer : answer);
    default:
      return state;
  }
}