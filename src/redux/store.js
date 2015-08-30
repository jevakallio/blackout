'use strict';

const Redux = require('redux');
const Immutable = require('immutable');
const levels = require('../data/levels');

const defaultState = Immutable.Map(levels.start);

const next = function(state = defaultState, action) {
  switch(action.type) {
    case 'UPDATE_POSITION':
      return state.merge(action.position);
    case 'UPDATE_POV':
      return state.merge(action.pov);
    case 'SET_LEVEL':
      return state.merge(action.level);
    case 'UPDATE_MAP_ZOOM':
      return state.set('mapZoom', action.mapZoom);
    case 'CORRECT_ANSWER':
      return state
        .merge(action.nextLevel)
        .set('previousAnswer', action.answer)
        .set('previousAnswerWasCorrect', true);
    case 'WRONG_ANSWER':
      return state
        .merge(action.nextLevel)
        .set('previousAnswer', action.answer)
        .set('previousAnswerWasCorrect', false);
    default:
      return state;
  }
};

module.exports = Redux.createStore(next);
