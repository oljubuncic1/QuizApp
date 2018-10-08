import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';
import prettyMs from 'pretty-ms';

import * as questionsActions from '../actions/questionsActions';
import * as answersActions from '../actions/answersActions';
import MainPage from '../components/MainPage/MainPage';

/*
We have 3 quiz states:
0 - quiz not yet started - DEFAULT STATE
1 - quiz started
2 - quiz finished
 */

class MainPageScene extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      quizState: 0,
      numOfCorrectAnswers: 0,
      startTime: null,
      timeSpent: '',
    };

  }

  startQuiz = () => {
    this.props.questionsActions.getQuestions(10)
      .then(() => {
        // set initial answers to be the first choices by default
        this.props.answersActions.setInitialAnswers(this.getInitialAnswers())
          .then(() => {
            this.setState({
              quizState: 1,
              startTime: Date.now(),
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  submitQuiz = () => {
    Alert.alert(
      'Submit results',
      'Are you sure you want to submit your results?',
      [
        { text: 'Cancel' },
        {
          text: 'OK',
          onPress: () => (
            this.processResults()
          ),
        },
      ],
      { cancelable: false },
    );
  };

  processResults = () => {
    // calculate the number of correct answers and time spent and display it to the user
    this.setState({
      quizState: 2,
      numOfCorrectAnswers: this.calculateCorrectAnswers(),
      timeSpent: prettyMs(this.state.startTime - Date.now(), {compact: true}),
    });
  };

  calculateCorrectAnswers = () => {
    let correctAnswers = 0;
    for(let i = 0;i < this.props.answers.length;i++) {
      this.props.answers[i] === this.props.questions[i].correct_answer && correctAnswers++;
    }
    return correctAnswers;
  };


  // extracts first answer from possible choices and sets them to be initial answers
  getInitialAnswers = () => {
    const initialAnswers = [];
    for(let i = 0;i < this.props.questions.length; i++) {
      initialAnswers.push(this.props.questions[i].choices[0]);
    }
    return initialAnswers;
  };

  render() {
    return (
      <MainPage
        quizState={this.state.quizState}
        handleStartQuizPress={this.startQuiz}
        handleSubmitQuizPress={this.submitQuiz}
        questions={this.props.questions}
        numOfCorrectAnswers={this.state.numOfCorrectAnswers}
        handlePlayAgainPress={this.startQuiz}
        timeSpent={this.state.timeSpent}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log('answers', state.answers);
  return {
    questions: state.questions,
    answers: state.answers,
  };

};

const mapDispatchToProps = dispatch => {
  return {
    questionsActions: bindActionCreators(questionsActions, dispatch),
    answersActions: bindActionCreators(answersActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageScene);


