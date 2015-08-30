'use strict';

const React = require('react');
const {string, bool} = React.PropTypes;

const AnswerView = React.createClass({
  displayName: 'AnswerView',
  propTypes: {

    // state
    levelAnswer: string.isRequired,
    levelAnswerIsExact: bool.isRequired

    //actions
  },
  render() {
    return (
      <div className='answer-container'>{this.props.levelAnswer}</div>
    );
  }
});

module.exports = AnswerView;
