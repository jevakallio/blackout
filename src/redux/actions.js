'use strict';
let levels = require('../data/levels');

module.exports = {
  updatePosition(position) {
    return {
      type: 'UPDATE_POSITION',
      position
    };
  },

  updatePov(pov) {
    return {
      type: 'UPDATE_POV',
      pov
    };
  },

  updateMapZoom(mapZoom) {
    return {
      type: 'UPDATE_MAP_ZOOM',
      mapZoom
    };
  },

  setLevel(levelId) {
    let level = levels[levelId];
    if(!level) {
      throw new Error('No known level ' + levelId);
    }
    return {
      type: 'SET_LEVEL',
      level: levels[levelId]
    };
  }
};
