'use strict';

const React = require('react');
const google = require('../util/google');
const mapTheme = require('../util/map-theme');
const mapLinker = require('../util/map-linker');
const {func, number} = React.PropTypes;

const MapView = React.createClass({
  displayName: 'MapView',
  propTypes: {
    // state
    latitude: number.isRequired,
    longitude: number.isRequired,
    minZoom: number.isRequired,
    zoom: number.isRequired,

    // dispatcher events
    onZoomChanged: func.isRequired
  },

  componentDidMount() {
    let el = React.findDOMNode(this.refs.mapHost);
    let options = {
      center: new google.maps.LatLng(
        this.props.latitude,
        this.props.longitude
      ),
      minZoom: this.props.minZoom,
      zoom: this.props.zoom,
      styles: mapTheme,
      panControl: false
    };

    let map = this._map = new google.maps.Map(el, options);

    map.addListener('zoom_changed', () => {
      this.props.onZoomChanged(map.getZoom());
    });

    mapLinker.registerMap(map);
  },

  componentWillReceiveProps(next) {
    let prev = this.props;
    if (next.zoom !== prev.zoom) {
      this._map.setZoom(next.zoom);
    }

    if(next.minZoom !== prev.minZoom) {
      this._map.setOption({minZoom: next.minZoom});
    }
  },

  render() {
    return (
      <div style={styles.map} ref='mapHost'>
        Map host
      </div>
    );
  }
});

const styles = {
  map: {
    height: '80vh',
    width: '90%',
    marginTop: '10%',
    marginRight: '10%'
  }
};

module.exports = MapView;
