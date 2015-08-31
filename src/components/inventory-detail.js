'use strict';

const React = require('react');
const {string, func} = React.PropTypes;

const InventoryDetail = React.createClass({
  displayName: 'InventoryDetail',
  propTypes: {

    // state
    name: string.isRequired,
    type: string.isRequired,
    image: string.isRequired,

    //actions
    close: func.isRequired
  },
  render() {
    return (
      <div style={styles.container}>
        <img
          title={this.props.name}
          src={this.props.image}
          style={styles.image} />
        <button className='red-button' onClick={this.props.close}>
          Close
        </button>
      </div>
    );
  }
});

const styles = {
  container: {
    textAlign: 'center'
  },
  image: {
    width: '75%',
    padding: '40px'
  }
};

module.exports = InventoryDetail;
