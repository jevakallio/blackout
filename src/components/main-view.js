'use strict';

const React = require('react');
const StreetView = require('./street-view');
const MapView = require('./map-view');
const {number, func, string, bool} = React.PropTypes;

const MainView = React.createClass({
  displayName: 'MainView',
  propTypes: {

    // state
    levelTitle: string.isRequired,
    levelDescription: string.isRequired,
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

    //actions
    updatePosition: func.isRequired,
    updatePov: func.isRequired,
    updateMapZoom: func.isRequired,

    setLevel: func.isRequired
  },
  render() {
    return (
      <div className='row'>
        <div className='one-half column'>
          <MapView
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            minZoom={this.props.mapMinZoom}
            zoom ={this.props.mapZoom}
            onZoomChanged={this.props.updateMapZoom}
          />
        </div>
        <div className='one-half column'>
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
      </div>
    );
  }
});

module.exports = MainView;
