'use strict';

const React = require('react');
const google = require('../util/google');
const mapLinker = require('../util/map-linker');

const {func, number, string} = React.PropTypes;

const StreetView = React.createClass({
  displayName: 'StreetView',
  propTypes: {
    // state
    latitude: number.isRequired,
    longitude: number.isRequired,
    heading: number.isRequired,
    pitch: number.isRequired,
    panoramaClassName: string.isRequired,
    // dispatcher callbacks
    onPositionChanged: func.isRequired,
    onPovChanged: func.isRequired
  },

  componentDidMount() {
    let el = React.findDOMNode(this.refs.streetViewHost);
    let options = {
      position: new google.maps.LatLng(
        this.props.latitude,
        this.props.longitude
      ),
      pov: {
        heading: this.props.heading,
        pitch: this.props.pitch
      },
      linksControl: true,
      panControl: true,
      addressControl: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },
      enableCloseButton: false,
      addressControlOptions: {
        position: google.maps.ControlPosition.TOP
      }
    };

    let panorama = this._panorama = new google.maps.StreetViewPanorama(el, options);

    panorama.addListener('position_changed', () => {
      let position = panorama.getPosition();
      this.props.onPositionChanged({
        latitude: position.lat(),
        longitude: position.lng()
      });
    });

    panorama.addListener('pov_changed', () => {
      let pov = panorama.getPov();
      this.props.onPovChanged({
        heading: pov.heading,
        pitch: pov.pitch
      });
    });

    mapLinker.registerStreetView(panorama);
  },

  componentWillReceiveProps(next) {

    // only sync streetview locations
    // - if the values changed from previous render cycle (changed in this props)
    // - if the value is different from the streetview location (actually changed)
    let pov = this._panorama.getPov();
    if ((next.heading !== this.props.heading || next.pitch !== this.props.pitch) &&
        (next.heading !== pov.heading || next.pitch !== pov.pitch)) {
      this._panorama.setPov({
        heading: next.heading,
        pitch: next.pitch
      });
    }
    let pos = this._panorama.getPosition();
    if((next.latitude !== this.props.latitude || next.longitude !== this.props.longitude) &&
       (next.latitude !== pos.lat() || next.longitude !== pos.lng())) {
      this._panorama.setPosition(new google.maps.LatLng(next.latitude, next.longitude));
    }
  },

  render() {
    return (
      <div className={'street-view-container ' + this.props.panoramaClassName} ref='streetViewHost'>
        Street view
      </div>
    );
  }
});

module.exports = StreetView;
