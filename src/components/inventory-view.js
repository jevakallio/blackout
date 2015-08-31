'use strict';

const React = require('react');
const InventoryThumbnail = require('./inventory-thumbnail');
const {array, func} = React.PropTypes;

const InventoryView = React.createClass({
  displayName: 'InventoryView',
  propTypes: {

    // state
    inventory: array.isRequired,

    //actions
    onItemClicked: func.isRequired
  },
  render() {
    let items = this.props.inventory.map(item =>
      <div
        style={{float: 'left'}}
        onClick={() => this.props.onItemClicked(item) }>
        <InventoryThumbnail
          name={item.name}
          type={item.type}
          image={item.image}
          />
      </div>);

    return (
      <div className='inventory-container'>
        <div>
          {items}
        </div>
      </div>
    );
  }
});

module.exports = InventoryView;
