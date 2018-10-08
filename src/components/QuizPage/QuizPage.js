import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Button, Text } from 'native-base';

import styles from './styles';
import Question from '../Question/Question';

const QuizPage = ({questions, handleSubmitQuizPress}) => (
  <ScrollView style={styles.quizPageView}>
    {questions.map((question, index) =>
      <Question
        key={question.question}
        question={question}
        index={index}
      />
    )}
    <Button
      style={styles.submitButton}
      primary
      block
      onPress={handleSubmitQuizPress}
    >
      <Text>Submit</Text>
    </Button>
  </ScrollView>
);

QuizPage.propTypes = {
  questions: PropTypes.array.isRequired,
  handleSubmitQuizPress: PropTypes.func,
};

export default QuizPage;
