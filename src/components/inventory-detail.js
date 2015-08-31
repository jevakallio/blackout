'use strict';

const React = require('react');
const {string} = React.PropTypes;

const InventoryDetail = React.createClass({
  displayName: 'InventoryDetail',
  propTypes: {

    // state
    name: string.isRequired,
    type: string.isRequired,
    image: string.isRequired
  },
  render() {
    return (
      <div style={styles.container}>
        <img
          title={this.props.name}
          src={this.props.image}
          style={styles.image} />
      </div>
    );
  }
});

const styles = {
  container: {
    textAlign: 'center',
    float: 'none'
  },
  image: {
    height: '80vh',
    marginTop: '10%',
    marginRight: '10%'
  }
};

module.exports = InventoryDetail;
