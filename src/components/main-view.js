'use strict';

const React = require('react');
const StreetView = require('./street-view');
const MapView = require('./map-view');
const ClueView = require('./clue-view');
const AnswerView = require('./answer-view');

const {number, func, string, bool} = React.PropTypes;

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
    nextLevel: string,
    latitude: number.isRequired,
    longitude: number.isRequired,
    heading: number.isRequired,
    pitch: number.isRequired,
    mapZoom: number.isRequired,
    mapMinZoom: number.isRequired,
    worldStyle: string.isRequired,

    previousAnswer: string,
    previousAnswerWasCorrect: bool,

    //actions
    updatePosition: func.isRequired,
    updatePov: func.isRequired,
    updateMapZoom: func.isRequired,
    setLevel: func.isRequired,
    correctAnswerGiven: func.isRequired,
    wrongAnswerGiven: func.isRequired
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
        <div className='one-third column'>
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
          <MapView
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            minZoom={this.props.mapMinZoom}
            zoom ={this.props.mapZoom}
            onZoomChanged={this.props.updateMapZoom}
            />
        </div>
      </div>
    );
  }
});

module.exports = MainView;
