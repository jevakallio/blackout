'use strict';
const _ = require('lodash');
const React = require('react');
const {string, func, bool} = React.PropTypes;
const KEY_ENTER = 13;

const AnswerView = React.createClass({
  displayName: 'AnswerView',
  propTypes: {

    // state
    levelId: string.isRequired,
    levelQuestion: string.isRequired,
    levelAnswer: string.isRequired,
    levelAnswerIsExact: bool.isRequired,

    //actions
    onCorrectAnswer: func.isRequired,
    onWrongAnswer: func.isRequired
  },

  getInitialState() {
    return {
      showError: false
    };
  },

  onKeyUp() {
    this.setState({
      showError: false
    });
  },

  onKeyPress(e) {
    if(e.which === KEY_ENTER) {
      if(!this.checkAnswer(e.target.value)) {
        this.setState({
          showError: true
        });
      }
    }
  },

  checkAnswer(answer) {
    let attempt = answer.trim().toLowerCase();
    let expected = this.props.levelAnswer.toLowerCase();

    let correct = this.props.levelAnswerIsExact
      ? attempt === expected
      : attempt.indexOf(expected) !== -1;

    if (correct) {
      this.props.onCorrectAnswer(attempt);
    } else {
      this.props.onWrongAnswer(attempt);
    }

    return correct;
  },

  render() {

    let inputStyle = styles.answerInput;
    if (this.state.showError) {
      inputStyle = _.extend({}, inputStyle, {
        color: 'white',
        backgroundColor: 'hsl(347, 91%, 29%)'
      });
    }

    return (
      <div className='answer-container'>
        <label htmlFor='answer'>
          {this.props.levelQuestion}
        </label>
        <input
          name='answer'
          type='text'
          onKeyUp={this.onKeyUp}
          onKeyPress={this.onKeyPress}
          style={inputStyle}>
        </input>
      </div>
    );
  }
});

const styles = {
  answerInput: {
    color: '#222',
    width: '95%',
    marginRight: '5%'
  }
};

module.exports = AnswerView;
