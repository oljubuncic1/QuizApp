import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Button
} from 'native-base';

import styles from './styles';

const StartPage = ({handleStartQuizPress}) => (
  <View style={styles.startPageView}>
    <View style={styles.titleView}>
      <Text style={styles.title}>Trivia Quiz</Text>
      <Text style={styles.description}>Welcome to Trivia Quiz. You will be given a set of 10 multiple choice questions. Press the button to get started.</Text>
    </View>
    <View style={styles.startButtonView}>
      <Button
        style={styles.mainButton}
        primary
        block
        onPress={handleStartQuizPress}
      >
        <Text>Start Quiz</Text>
      </Button>
    </View>
  </View>
);

StartPage.propTypes = {
  handleStartQuizPress: PropTypes.func.isRequired,
};

export default StartPage;
