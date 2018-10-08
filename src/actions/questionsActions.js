import axios from 'axios';

import * as actionTypes from './actionTypes';
import * as helpers from './helper';

const getQuestionsSuccess = questions => {
  return {
    type: actionTypes.GET_QUESTIONS,
    questions,
  }
};

export const getQuestions = numberOfQuestions => {
  return function(dispatch) {
    return axios.get('https://opentdb.com/api.php?amount=' + numberOfQuestions)
      .then((response) => {
        if(response.data.response_code === 0) {
          // randomize possible choices
          helpers.randomizeChoices(response.data.results);
          dispatch(getQuestionsSuccess(response.data.results));
        }
      })
      .catch((error) => {
        throw error;
      });
  };
};