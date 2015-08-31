'use strict';

const React = require('react');
const StreetView = require('./street-view');
const MapView = require('./map-view');
const ClueView = require('./clue-view');
const AnswerView = require('./answer-view');
const InventoryView = require('./inventory-view');
const InventoryDetail = require('./inventory-detail');

const {number, func, string, bool, array, object} = React.PropTypes;

const MainView = React.createClass({
  displayName: 'MainView',
  propTypes: {

    // state
    levelId: string.isRequired,
    levelTitle: string.isRequired,
    levelDescription: string.isRequired,
    levelQuestion: string.isRequired,
    levelAnswer: string.isRequired,
    levelAnswerIsExact: bool.isRequired,
    inventory: array.isRequired,
    nextLevel: string,
    latitude: number.isRequired,
    longitude: number.isRequired,
    heading: number.isRequired,
    pitch: number.isRequired,
    mapZoom: number.isRequired,
    mapMinZoom: number.isRequired,
    worldStyle: string.isRequired,

    // transient state
    previousAnswer: string,
    previousAnswerWasCorrect: bool,
    focusedInventoryItem: object,

    //actions
    updatePosition: func.isRequired,
    updatePov: func.isRequired,
    updateMapZoom: func.isRequired,
    setLevel: func.isRequired,
    correctAnswerGiven: func.isRequired,
    wrongAnswerGiven: func.isRequired,
    viewInventoryItem: func.isRequired,
    hideInventoryItem: func.isRequired
  },
  render() {
    return (
      <div className='row'>
        <div className='two-thirds column'>
          <StreetView
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            heading={this.props.heading}
            pitch={this.props.pitch}
            panoramaClassName={this.props.worldStyle}
            onPositionChanged={this.props.updatePosition}
            onPovChanged={this.props.updatePov}
            />
        </div>
        { !this.props.focusedInventoryItem &&
          <div
            className='one-third column'
            >
            <ClueView
              levelTitle={this.props.levelTitle}
              levelDescription={this.props.levelDescription}
              />
            <AnswerView
              levelId={this.props.levelId}
              levelQuestion={this.props.levelQuestion}
              levelAnswer={this.props.levelAnswer}
              levelAnswerIsExact={this.props.levelAnswerIsExact}
              onCorrectAnswer={answer => this.props.correctAnswerGiven(this.props.levelId, answer)}
              onWrongAnswer={answer => this.props.wrongAnswerGiven(this.props.levelId, answer)}
              />
            <InventoryView
              inventory={this.props.inventory}
              onItemClicked={this.props.viewInventoryItem}
              />
            <MapView
              latitude={this.props.latitude}
              longitude={this.props.longitude}
              minZoom={this.props.mapMinZoom}
              zoom ={this.props.mapZoom}
              onZoomChanged={this.props.updateMapZoom}
              />
          </div>
        }
        { this.props.focusedInventoryItem &&
          <div className='one-third column'>
            <InventoryDetail
              name={this.props.focusedInventoryItem.name}
              type={this.props.focusedInventoryItem.type}
              image={this.props.focusedInventoryItem.image}
              close={this.props.hideInventoryItem}
              />
          </div>
        }
      </div>
    );
  }
});

module.exports = MainView;
