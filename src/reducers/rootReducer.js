import {combineReducers} from 'redux';
import questions from './questionsReducer';
import answers from './answersReducer';

const rootReducer = combineReducers({
  questions,
  answers,
});

export default rootReducer;