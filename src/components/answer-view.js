'use strict';

const React = require('react');
const {string, bool} = React.PropTypes;
const KEY_ENTER = 13;

const AnswerView = React.createClass({
  displayName: 'AnswerView',
  propTypes: {

    // state
    levelQuestion: string.isRequired,
    levelAnswer: string.isRequired,
    levelAnswerIsExact: bool.isRequired

    //actions
  },

  onKeyPress(e) {
    if(e.which === KEY_ENTER) {

    }
  },

  render() {
    return (
      <div className='answer-container'>
        <label htmlFor='answer'>
          {this.props.levelQuestion}
        </label>
        <input
          name='answer'
          type='text'
          onKeyPress={this.onKeyPress}
          style={styles.answerInput}>
        </input>
      </div>
    );
  }
});

const styles = {
  answerInput: {
    width: '95%',
    marginRight: '5%'
  }
};

module.exports = AnswerView;
