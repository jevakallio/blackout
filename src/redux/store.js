'use strict';

const Redux = require('redux');
const gameState = require('../util/game-state');

const defaultState = gameState.load() || gameState.getInitialState();

function mutate(state, action) {
  switch(action.type) {
    case 'UPDATE_POSITION':
      return state.merge(action.position);
    case 'UPDATE_POV':
      return state.merge(action.pov);
    case 'SET_LEVEL':
      console.warn('SET_LEVEL called, needs work...');
      return state.merge(action.level);
    case 'UPDATE_MAP_ZOOM':
      return state.set('mapZoom', action.mapZoom);
    case 'CORRECT_ANSWER':
      return state
        .merge(action.nextLevel)
        .update('inventory', inventory => inventory.push(...action.nextLevel.acquiredInventory || []))
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
}

function next(state = defaultState, action) {
  let nextState = mutate(state, action);
  gameState.save(nextState);
  return nextState;
}

module.exports = Redux.createStore(next);
