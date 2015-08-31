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
      showError: false,
      showSuccess: false,
      value: ''
    };
  },

  componentWillReceiveProps(next) {
    if(next.levelId !== this.props.levelId) {
      this.setState({
        value: ''
      });
    }
  },

  onKeyUp() {
    this.setState({
      showError: false,
      showSuccess: false
    });
  },

  onKeyPress(e) {
    if(e.which === KEY_ENTER) {
      this.checkAnswer(e.target.value);
    }
  },

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  },


  checkAnswer(answer) {
    let attempt = answer.trim().toLowerCase();
    let expected = this.props.levelAnswer.toLowerCase();

    let correct = this.props.levelAnswerIsExact
      ? attempt === expected
      : attempt.indexOf(expected) !== -1;

    if (correct) {
      this.props.onCorrectAnswer(attempt);
      this.setState({
        showSuccess: true
      });
    } else {
      this.props.onWrongAnswer(attempt);
      this.setState({
        showError: true
      });
    }
  },

  render() {

    let inputStyle = styles.answerInput;
    if (this.state.showError) {
      inputStyle = _.extend({}, inputStyle, {
        color: 'white',
        backgroundColor: 'hsl(347, 91%, 29%)'
      });
    }

    if(this.state.showSuccess) {
      inputStyle = _.extend({}, inputStyle, {
        color: 'white',
        backgroundColor: '#04AB00'
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
          value={this.state.value}
          onKeyUp={this.onKeyUp}
          onKeyPress={this.onKeyPress}
          onChange={this.onChange}
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
