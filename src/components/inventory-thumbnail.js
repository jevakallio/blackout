'use strict';

const React = require('react');
const {string} = React.PropTypes;

const InventoryThumbnail = React.createClass({
  displayName: 'InventoryThumbnail',
  propTypes: {

    // state
    name: string.isRequired,
    type: string.isRequired,
    image: string.isRequired
  },
  render() {
    return (
      <div className='inventory-thumbnail'>
        <img
          title={this.props.name}
          src={this.props.image}
          style={styles.thumbnail}/>
      </div>
    );
  }
});

const styles = {
  thumbnail: {
    height: '100px',
    padding: '20px'
  }
};

module.exports = InventoryThumbnail;
