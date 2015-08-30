'use strict';

const React = require('react');
const {string} = React.PropTypes;

const ClueView = React.createClass({
  displayName: 'ClueView',
  propTypes: {

    // state
    levelTitle: string.isRequired,
    levelDescription: string.isRequired

    //actions
  },
  render() {
    return (
      <div className='clue-container'>{this.props.levelTitle}</div>
    );
  }
});

module.exports = ClueView;
