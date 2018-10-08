import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';

import styles from './styles';
import StartPage from '../StartPage/StartPage';
import QuizPage from '../QuizPage/QuizPage';
import ResultsPage from '../ResultsPage/ResultsPage';

const MainPage = ({quizState, handleStartQuizPress, questions, handleSubmitQuizPress, numOfCorrectAnswers, handlePlayAgainPress, timeSpent}) => (
  <Container style={styles.container}>
    {quizState === 0 ?
      <StartPage handleStartQuizPress={handleStartQuizPress} />
    : quizState === 1 ? <QuizPage questions={questions} handleSubmitQuizPress={handleSubmitQuizPress}/>
    : <ResultsPage numOfCorrectAnswers={numOfCorrectAnswers} handlePlayAgainPress={handlePlayAgainPress} timeSpent={timeSpent}/>
    }
  </Container>
);

MainPage.propTypes = {
  handleStartQuizPress: PropTypes.func.isRequired,
  quizState: PropTypes.number.isRequired,
  questions: PropTypes.array,
  handleSubmitQuizPress: PropTypes.func.isRequired,
  numOfCorrectAnswers: PropTypes.number.isRequired,
  handlePlayAgainPress: PropTypes.func.isRequired,
  timeSpent: PropTypes.string,
};

export default MainPage;
