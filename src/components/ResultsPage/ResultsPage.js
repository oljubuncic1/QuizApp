import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Button
} from 'native-base';

import styles from './styles';

const ResultsPage = ({ numOfCorrectAnswers, handlePlayAgainPress, timeSpent }) => (
  <View style={styles.resultsPageView}>
    <View style={styles.infoView}>
      <Text style={styles.infoText}>{'Correct answers: ' + numOfCorrectAnswers.toString()}</Text>
      <Text style={styles.infoText}>{'Total time spent: ' +  timeSpent}</Text>
    </View>
    <View style={styles.playAgainButtonView}>
      <Button
        style={styles.playAgainButton}
        primary
        block
        onPress={handlePlayAgainPress}
      >
        <Text>Play again</Text>
      </Button>
    </View>
  </View>
);

ResultsPage.propTypes = {
  numOfCorrectAnswers: PropTypes.number.isRequired,
  handlePlayAgainPress: PropTypes.func.isRequired,
  timeSpent: PropTypes.string,
};


export default ResultsPage;
