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
      <div className='clue-container'>
        <p style={styles.description}>{this.props.levelDescription}</p>
      </div>
    );
  }
});

const styles = {
  description: {
    padding: '40px 40px 0 0',
    textAlign: 'justify'
  }
};

module.exports = ClueView;
