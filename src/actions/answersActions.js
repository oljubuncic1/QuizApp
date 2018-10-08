import * as actionTypes from './actionTypes';

const setInitialAnswersSuccess = answers => {
  return {
    type: actionTypes.SET_INITIAL_ANSWER_SUCCESS,
    answers,
  }
};

const answerQuestionSuccess = (answerIndex, answer) => {
  return {
    type: actionTypes.ANSWER_QUESTION_SUCCESS,
    answerIndex,
    answer,
  }
};

export const answerQuestion = (answerIndex, answer) => {
  return function(dispatch) {
    dispatch(answerQuestionSuccess(answerIndex, answer));
    return Promise.resolve();
  };
};

export const setInitialAnswers = (answers) => {
  return function(dispatch) {
    dispatch(setInitialAnswersSuccess(answers));
    return Promise.resolve();
  };
};