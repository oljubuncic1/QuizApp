import React, { PureComponent } from 'react';
import { View, Text } from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import html from 'html-escaper';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as answersActions from '../../actions/answersActions';

import styles from './styles';

class Question extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      questionData: [],
    };

  }

  componentWillMount() {
    // transform the data so it can be usable by radio button group component
    this.transformQuestions();
  }

  transformQuestions = () => {
    const questionData = [];
    for(let i  = 0; i < this.props.question.choices.length; i++) {
      questionData.push({
        'label': html.unescape(this.props.question.choices[i]),
        'selected': i === 0,
        'color': '#ff5050',
      });
    }
    this.setState({
      questionData,
    });
  };

  onPress = questionData => {
    this.setState({
      questionData,
    });
    // change answers in the store state
    this.props.answersActions.answerQuestion(this.props.index, this.getSelectedChoice(questionData))
      .catch((error) => {
        console.log(error);
      });
  };

  getSelectedChoice = (questionData) => {
    for(let i = 0;i < questionData.length;i++) {
      if(questionData[i].selected)
        return questionData[i].label;
    }
  };

  render() {
    return (
      <View style={styles.questionView}>
        <Text style={styles.questionText}>{(this.props.index + 1).toString() + '. ' +  html.unescape(this.props.question.question)}</Text>
        <RadioGroup radioButtons={this.state.questionData} onPress={this.onPress} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    answersActions: bindActionCreators(answersActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Question);


